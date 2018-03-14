import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS } from '../../client/actions/blogs';
import { addBlog, deleteBlog, fetchBlogs } from '../../client/thunks/blogs';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Blogs actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('should fetch blogs', () => {
    const testBlog = {
      _id: 1,
      author: 'Test',
      text: 'Test'
    };
    const serverResponse = {
      blogs: [testBlog]
    };

    fetchMock.once('http://localhost:3000/api/blogs', serverResponse, { method: 'GET' });

    const expectedActions = [
      {
        type: FETCH_BLOGS,
        blogs: [testBlog]
      }
    ];

    const store = mockStore({ blogs: [] });

    return store.dispatch(fetchBlogs()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });

  test('should add blog', () => {
    const testBlog = {
      _id: 1,
      author: 'Test',
      text: 'Test'
    };
    const serverResponse = {
      blog: testBlog
    };
    const expectedActions = [
      {
        type: ADD_BLOG,
        blog: testBlog
      }
    ];
    const store = mockStore({ blogs: [] });

    fetchMock.once('http://localhost:3000/api/blogs', serverResponse, { method: 'POST' });

    return store.dispatch(addBlog(testBlog)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });

  test('should delete blog by id', () => {
    const _id = 1;
    const serverResponse = {
      _id: _id
    };
    const expectedActions = [
      {
        type: DELETE_BLOG,
        _id: _id
      }
    ];

    const store = mockStore({ blogs: [] });

    fetchMock.once(`http://localhost:3000/api/blogs/${encodeURI(_id)}`, serverResponse, { method: 'DELETE' });

    return store.dispatch(deleteBlog(_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });
});
