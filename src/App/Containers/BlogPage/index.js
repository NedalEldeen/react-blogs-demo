import React, { useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { getBlog } from 'state/actions';
import style from './BlogPage.module.scss';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { blogId } = useParams();
  const displayedBlog = useSelector(({ displayedBlog }) => displayedBlog);
  useEffect(() => {
    if (blogId) dispatch(getBlog(blogId));
  }, [blogId]);

  return (
    <div className={style['blog-page']}>
      {
        displayedBlog && (
          <div>
            <h2>
              <IconButton size="small" onClick={() => history.goBack()}>
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
              <span>{displayedBlog.title}</span>
            </h2>
            <Divider />
            <p>{displayedBlog.body}</p>
            <div>
              <img src={displayedBlog.image} alt={displayedBlog.title} />
            </div>
          </div>
        )
      }
      {
        displayedBlog === null && (
          <div>
            <h2>
              <IconButton size="small" onClick={() => history.goBack()}>
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
            </h2>
            <Divider />
            <p>
              <span>Not Found </span>
              <Link to="/"> GO TO HOME</Link>
            </p>
          </div>
        )
      }
    </div>
  );
};
