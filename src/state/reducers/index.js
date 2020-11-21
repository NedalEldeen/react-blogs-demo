import { createReducer } from 'utils/createReducer';
import handlers from './handlers';

const INIT_STATE = {
  query: {
    searchTerm: '',
    sortBy: 'desc'
  },
  loading: false,
  blogs: [],
  displayedBlog: false, // false | null | object
  errors: []
};

export default createReducer(INIT_STATE, handlers);
