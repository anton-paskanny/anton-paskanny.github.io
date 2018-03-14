import userReducer from '../../client/reducers/user';
import { SIGN_IN, LOG_OUT } from '../../client/actions/user';

describe('User reducer', () => {
  test('should set logged in', () => {
    const user = {
      _id: 1,
      username: 'Test',
      password: '123'
    };

    const result = userReducer({
      isLoggedIn: false,
      data: null,
      error: null,
      isLoading: false
    },
    {
      type: SIGN_IN,
      user: user
    });

    expect(result).toEqual({
      isLoggedIn: true,
      data: user,
      error: null,
      isLoading: false
    })
  });

  test('should log out', () => {
    const user = {
      _id: 1,
      username: 'Test',
      password: '123'
    };

    const result = userReducer({ isLoggedIn: true, data: user}, {
      type: LOG_OUT
    });

    expect(result).toEqual({
      isLoggedIn: false,
      data: null
    })
  });
})
