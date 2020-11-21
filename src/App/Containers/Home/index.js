import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBlogs } from 'state/actions';
import BlogCard from 'App/Components/BlogCard';
import BlogFilter from './BlogFilter';
import style from './Home.module.scss';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { blogs, query } = useSelector(({ blogs, query }) => ({ blogs, query }));
  useEffect(() => {
    dispatch(getBlogs());
  }, [query]);

  return (
    <div className={style['home-page']}>
      <BlogFilter />
      <div className="blogs-container">
        {
          blogs.length > 0 && blogs.map((blog) => (
            <BlogCard
              onClick={() => {
                history.push(`/blog/${blog.blog_id}/${blog.slug}`);
              }}
              key={blog.blog_id}
              blog={blog}
              />
          ))
        }
      </div>
    </div>
  );
};
