import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesData from '../../movies.json';
import Movie from '../movie/movie';
import './movie-selected.css';

class MovieSelected extends Component {

    render() {
        const  id = this.props.id || 1;
        const selectedMovie = moviesData.movies.filter(item => item.id === id)[0];

        return (
            <div className="movie__selected">
                <Movie selectedMovie={selectedMovie} />
            </div>
        )
    }

}

MovieSelected.propTypes = {
    id: PropTypes.number
};

export default MovieSelected;
