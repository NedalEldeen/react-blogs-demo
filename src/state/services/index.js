import jsonBlogs from './blogs.json';

const DELAY_TIME = 500;

const filterAndSortBlogs = (jsonBlogs, query) => {
  let blogs = [...jsonBlogs];
  const { searchTerm, sortBy } = query;

  if (searchTerm) {
    const regEx = new RegExp(searchTerm, 'im');
    blogs = blogs.filter((blog) => regEx.test(blog.title) || regEx.test(blog.body) || regEx.test(blog.tags.toString()));
  }

  blogs.sort((a, b) => {
    let keyA;
    let keyB;
    if (sortBy === 'desc') {
      keyA = new Date(b.published_at);
      keyB = new Date(a.published_at);
    } else {
      keyA = new Date(a.published_at);
      keyB = new Date(b.published_at);
    }
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

  return blogs;
};

export const getBlogsAPI = (query) => (
  new Promise((resolve) => {
    setTimeout(() => {
      const blogResponse = filterAndSortBlogs(jsonBlogs, query);
      resolve(blogResponse);
    }, DELAY_TIME);
  })
);

export const getBlogAPI = (blogId) => (
  new Promise((resolve) => {
    setTimeout(() => {
      const selectedBlog = jsonBlogs.find((blog) => parseInt(blog.blog_id, 10) === parseInt(blogId, 10));
      resolve(selectedBlog || null);
    }, DELAY_TIME);
  })
);
