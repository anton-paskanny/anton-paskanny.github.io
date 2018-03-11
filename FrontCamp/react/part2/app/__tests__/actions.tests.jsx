import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as userActions from '../client/actions/user';
import * as blogsActions from '../client/actions/blogs';
import * as types from '../client/actions/actionsTypes';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('User actions', () => {
  test('should create an action to log user in', () => {
    const user = {
      _id: 1,
      username: 'Test',
      password: '1234'
    };

    const expectedAction = {
      type: types.SET_LOGGED_IN,
      user
    };

    expect(userActions.setLoggedIn(user)).toEqual(expectedAction);
  });
});

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
        type: types.FETCH_BLOGS,
        blogs: [testBlog]
      }
    ];

    const store = mockStore({ blogs: [] });

    return store.dispatch(blogsActions.fetchBlogs()).then(() => {
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
        type: types.ADD_BLOG,
        blog: testBlog
      }
    ];
    const store = mockStore({ blogs: [] });

    fetchMock.once('http://localhost:3000/api/blogs', serverResponse, { method: 'POST' });

    return store.dispatch(blogsActions.addBlog(testBlog)).then(() => {
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
        type: types.DELETE_BLOG,
        _id: _id
      }
    ];

    const store = mockStore({ blogs: [] });

    fetchMock.once(`http://localhost:3000/api/blogs/${encodeURI(_id)}`, serverResponse, { method: 'DELETE' });

    return store.dispatch(blogsActions.deleteBlog(_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });
});
