import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, configure  } from 'enzyme';
import Movies from './movies';
import Filter from '../../modules/filter/filter';
import MovieSelected from '../../modules/movie-selected/movie-selected';

configure({ adapter: new Adapter() });

describe('<Movies />', () => {
    it('should render self, Filter and MovieSelected', () => {
        const renderedComponent = shallow( <Movies /> );
        // console.log(renderedComponent.debug());

        expect(renderedComponent.contains(<Filter />)).toBe(true);
        expect(renderedComponent.contains(<MovieSelected />)).toBe(true);

    })
});
