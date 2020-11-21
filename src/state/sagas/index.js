import {
  call, put, select, takeLatest, all
} from 'redux-saga/effects';
import { GET_BLOGS, GET_BLOG } from '../ACTION_TYPES';
import {
  pendGetBlogs,
  successGetBlogs,
  failGetBlogs,
  pendGetBlog,
  successGetBlog,
  failGetBlog
} from '../actions';
import { getBlogsAPI, getBlogAPI } from '../services';
import { selectBlogQuery } from '../selectors';

function* getBlogs() {
  try {
    yield put(pendGetBlogs());
    const blogQuery = yield select(selectBlogQuery);
    const blogs = yield call(getBlogsAPI, blogQuery);
    yield put(successGetBlogs(blogs));
  } catch (error) {
    yield put(failGetBlogs(error));
  }
}

function* getBlog({ payload: { blogId }}) {
  try {
    yield put(pendGetBlog());
    const response = yield call(getBlogAPI, blogId);
    yield put(successGetBlog(response));
  } catch (error) {
    yield put(failGetBlog(error));
  }
}

// ----------- saga watchers --------------- //

function* watchGetBlogs() {
  yield takeLatest(GET_BLOGS.ACTION, getBlogs);
}
function* watchGetBlog() {
  yield takeLatest(GET_BLOG.ACTION, getBlog);
}

function* rootSaga() {
  yield all([watchGetBlogs(), watchGetBlog()]);
}

export default rootSaga;
