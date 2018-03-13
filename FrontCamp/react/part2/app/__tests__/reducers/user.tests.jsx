import userReducer from '../../client/reducers/user';
import { SET_LOGGED_IN } from '../../client/actions/user';

describe('User reducer', () => {
  test('should set logged in', () => {
    const user = {
      _id: 1,
      username: 'Test',
      password: '123'
    };

    const result = userReducer({ isLoggedIn: false, data: null}, {
      type: SET_LOGGED_IN,
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
      type: SET_LOGGED_IN,
      user: null
    });

    expect(result).toEqual({
      isLoggedIn: false,
      data: null
    })
  });
})
