import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SET_LOGGED_IN, setLoggedIn } from '../../client/actions/user';


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
      type: SET_LOGGED_IN,
      user
    };

    expect(setLoggedIn(user)).toEqual(expectedAction);
  });
});
