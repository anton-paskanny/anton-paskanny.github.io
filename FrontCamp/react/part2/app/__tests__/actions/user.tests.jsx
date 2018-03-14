import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { signIn } from '../../client/thunks/user';
import { SIGN_IN, IS_LOADING } from '../../client/actions/user';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('User actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('should create an action to log user in', () => {
    const userToSignIn = {
      username: 'Test',
      password: 'Test'
    };

    const serverResponse = {
      success: true,
      user: {
        _id: 1,
        username: 'Test',
        password: 'Test'
      }
    };

    fetchMock.once('http://localhost:3000/users/signin', serverResponse, { method: 'POST' });

    const expectedActions = [
      {
        type: IS_LOADING,
      },
      {
        type: SIGN_IN,
        user: {
          _id: 1,
          username: 'Test',
          password: 'Test'
        }
      }
    ];

    const store = mockStore({
      isLoggedIn: false,
      data: null,
      error: null,
      isLoading: false
    });

    return store.dispatch(signIn(userToSignIn)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  });
});
