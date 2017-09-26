import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesData from '../movies.json';
import Cart from '../components/cart/cart';
import '../styles/movie-selected.css';

class MovieSelected extends Component {

    render() {
        const  id = this.props.id;
        const selectedMovie = moviesData.movies.filter(item => item.id === id);

        return (
            <div className="movie__selected">
                <div className="selected__item">
                    <Cart
                        selectedMovie={selectedMovie}
                    />
                </div>
            </div>
        )
    }

}

MovieSelected.propTypes = {
    id: PropTypes.number
};

export default MovieSelected;
