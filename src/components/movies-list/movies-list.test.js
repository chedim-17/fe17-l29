import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15';
import { shallow, mount, configure } from 'enzyme';
import MoviesList from './movies-list';
import CounterLikes from '../../modules/counter-likes/counter-likes';

configure({ adapter: new Adapter() });

describe('<MoviesList />', () => {
    const movies = [
        {
            "id": 1,
            "title": "The Shawshank Redemption",
            "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
            "stars": 5,
            "likes": 22,
            "genres": ["Crime", "Drama"],
            "actors": [
                "Tim Robbins",
                "Morgan Freeman",
                "Bob Gunton"
            ],
            "director": "Frank Darabont",
            "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red."
        },
        {
            "id": 2,
            "title": "The Godfather",
            "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
            "stars": 4,
            "likes": 15,
            "genres": ["Crime", "Drama"],
            "actors": [
                "Marlon Brando",
                "Al Pacino",
                "James Caan"
            ],
            "director": "Francis Ford Coppola",
            "description": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen"
        },
        {
            "id": 3,
            "title": "The Godfather: Part II",
            "posterUrl": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
            "stars": 4,
            "likes": 15,
            "genres": ["Crime", "Drama"],
            "actors": [
                "Al Pacino",
                "Robert De Niro",
                "Robert Duvall"
            ],
            "director": "Francis Ford Coppola",
            "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red"
        }
    ];

    const wrapper = shallow(<MoviesList moviesList={movies}/>);



    it('renders properly items amount ', () => {
        expect(wrapper.contains(<CounterLikes />)).toBe(true);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<MoviesList moviesList={movies} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
    // it('!!! check prop matches with movies', () => {
    //     expect(wrapper.find(MoviesList).prop('moviesList')).toEqual(movies)
    // });
});
