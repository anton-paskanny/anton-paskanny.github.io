import blogsReducer from '../client/reducers/blogs';
import userReducer from '../client/reducers/user';
import * as types from '../client/actions/actionsTypes';


describe('Blogs reducer', () => {
  test('should return initial state', () => {
    const result = blogsReducer([], {});
    expect(result).toEqual([]);
  })

  test('should add new blog', () => {
    const newBlog = {
        _id: 1,
        author: 'test',
        text: 'test'
    };

    const result = blogsReducer([], {
      type: types.ADD_BLOG,
      blog: newBlog
    });

    expect(result).toEqual([
      {
          _id: 1,
          author: 'test',
          text: 'test'
      }
    ]);
  });

  test('should delete blog by id', () => {
    const state = [{
      _id: 1,
      author: 'test',
      text: 'test'
    }];

    const result = blogsReducer(state, {
      type: types.DELETE_BLOG,
      _id: 1
    });

    expect(result).toEqual([]);
  })
});

describe('User reducer', () => {
  test('should set logged in', () => {
    const user = {
      _id: 1,
      username: 'Test',
      password: '123'
    };

    const result = userReducer({ isLoggedIn: false, data: null}, {
      type: types.SET_LOGGED_IN,
      user: user
    });

    expect(result).toEqual({
      isLoggedIn: true,
      data: user
    })
  });

  test('should set off logged in', () => {
    const user = {
      _id: 1,
      username: 'Test',
      password: '123'
    };

    const result = userReducer({ isLoggedIn: false, data: user}, {
      type: types.SET_LOGGED_IN,
      user: null
    });

    expect(result).toEqual({
      isLoggedIn: false,
      data: null
    })
  });
})
