import React from 'react';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { fetchMovie, resetMovie } from '../../client/actions/movie';
import { movieItem } from '../mocks/dataMock';
import { URL_BASE } from '../../client/utils';

import MovieDetail from '../../client/containers/MovieDetail';

const initialState = {
    selectedMovie: {
        data: movieItem,
        isFetching: false,
        err: null
    }
};
const initialMovieId = initialState.selectedMovie.data.id;
const mockStore = configureMockStore();

let store, container, component;

describe("MovieDetail container", () => {
    beforeEach(() => {
        store = mockStore(initialState);
        container = mount(<Provider store={store}><MovieDetail id={initialMovieId}/></Provider>);
        component = container.find('MovieDetail');
    });
    
    it("renders correctly", () => {
        expect(container).toMatchSnapshot();
        expect(component.prop('selectedMovie')).toBe(initialState.selectedMovie.data);
    });
    
    it("selected movie was reset on unmount event", () => {
        const expectedPayload = [
            fetchMovie(`${URL_BASE}/${initialMovieId}`),
            resetMovie()
        ];
        component.instance().componentWillUnmount();
        expect(store.getActions()).toEqual(expectedPayload);
    });

    it("didUpdate was invoked and new movie started fetching", () => {
        const newId = 222;
        const expectedPayload = [
            fetchMovie(`${URL_BASE}/${initialMovieId}`),
            fetchMovie(`${URL_BASE}/${newId}`)
        ];
        container.setProps({
            children: (
                <MovieDetail id={newId} />
            )
        });
        expect(store.getActions()).toEqual(expectedPayload);
    });

    it("didUpdate was invoked but new movie started fetching", () => {
        const expectedPayload = [
            fetchMovie(`${URL_BASE}/${initialMovieId}`)
        ];
        component.instance().componentDidUpdate({ id: initialMovieId });
        expect(store.getActions()).toEqual(expectedPayload);
    });

    it("Spinner is displayed while fetching data", () => {
        initialState.selectedMovie.data = null;
        initialState.selectedMovie.isFetching = true;
        store = mockStore(initialState);
        container = mount(<Provider store={store}><MovieDetail id={initialMovieId}/></Provider>);
        expect(component.find('Spinner')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });
  });