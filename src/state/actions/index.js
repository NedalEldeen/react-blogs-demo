import { createAction } from 'utils/action.helpers';
import {
  GET_BLOGS,
  GET_BLOG,
  UPDATE_SEARCH_TERM,
  UPDATE_SORT_BY
} from '../ACTION_TYPES';

export const getBlogs = createAction(GET_BLOGS.ACTION);
export const pendGetBlogs = createAction(GET_BLOGS.PENDING);
export const successGetBlogs = createAction(GET_BLOGS.SUCCESS, 'blogs');
export const failGetBlogs = createAction(GET_BLOGS.ERROR);

export const getBlog = createAction(GET_BLOG.ACTION, 'blogId');
export const pendGetBlog = createAction(GET_BLOG.PENDING);
export const successGetBlog = createAction(GET_BLOG.SUCCESS, 'blog');
export const failGetBlog = createAction(GET_BLOG.ERROR);

export const updateSearchTerm = createAction(UPDATE_SEARCH_TERM, 'searchTerm');
export const updateSortBy = createAction(UPDATE_SORT_BY, 'sortBy');
