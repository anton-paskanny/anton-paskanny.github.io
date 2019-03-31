import React from 'react';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { resetMovie } from '../../client/actions/movie';

import MovieDetail from '../../client/containers/MovieDetail';


describe("MovieDetail container", () => {
    const initialState = {
        selectedMovie: {
            data: {
                id: 424785,
                title: "Transformers 7",
                tagline: "",
                vote_average: 0,
                vote_count: 0,
                release_date: "2019-06-26",
                poster_path: "https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg",
                overview: "Plot unknown.",
                budget: 0,
                revenue: 0,
                runtime: null,
            },
            isFetching: false,
            err: null
        }
    };
    const mockStore = configureMockStore();

    let store, container, component;
    
    beforeEach(() => {
        store = mockStore(initialState);
        container = mount(<Provider store={store}><MovieDetail id={123}/></Provider>);
        component = container.find('MovieDetail');
    });
    
    it("renders correctly", () => {
        expect(container).toMatchSnapshot();
        expect(component.prop('selectedMovie')).toBe(initialState.selectedMovie.data);
    });
    
    it("selected movie was reset on unmount event", () => {
        const instance = component.instance();
        instance.componentWillUnmount();
        expect(store.getActions()).toContainEqual(resetMovie());
    });
  });