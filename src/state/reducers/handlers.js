import {
  GET_BLOGS,
  GET_BLOG,
  UPDATE_SEARCH_TERM,
  UPDATE_SORT_BY
} from 'state/ACTION_TYPES';

export default {
  // blogs
  [GET_BLOGS.PENDING]: (draftState) => {
    draftState.loading = true;
  },
  [GET_BLOGS.SUCCESS]: (draftState, { blogs }) => {
    draftState.loading = false;
    draftState.blogs = blogs;
  },
  [GET_BLOGS.ERROR]: (draftState, { error }) => {
    draftState.loading = false;
    draftState.errors = [error];
  },
  // blog
  [GET_BLOG.PENDING]: (draftState) => {
    draftState.loading = true;
    draftState.displayedBlog = false;
  },
  [GET_BLOG.SUCCESS]: (draftState, { blog }) => {
    draftState.loading = false;
    draftState.displayedBlog = blog;
  },
  [GET_BLOG.ERROR]: (draftState, { error }) => {
    draftState.loading = false;
    draftState.displayedBlog = null;
    draftState.errors = [error];
  },
  // query
  [UPDATE_SEARCH_TERM]: (draftState, { searchTerm }) => {
    draftState.query.searchTerm = searchTerm;
  },
  [UPDATE_SORT_BY]: (draftState, { sortBy }) => {
    draftState.query.sortBy = sortBy;
  },
};
