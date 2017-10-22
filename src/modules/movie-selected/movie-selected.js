import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies } from './moviesReducer';
import { getChoiceRole } from '../header/roleReducer';
import { selectedMovie } from './movieActions';
import { choiceOfRole } from '../header/roleActions';
import Movie from './movie/movie';
import './movie-selected.css';

class MovieSelected extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            selectedMovie: this.props.selectedMovie || this.props.movies[0]
        };

        this.addSelectedMovie = this.addSelectedMovie.bind(this);
        this.filterSelectedMovie = this.filterSelectedMovie.bind(this);

    }

    componentWillReceiveProps() {
        this.filterSelectedMovie();
        this.addSelectedMovie(this.state.selectedMovie);
    }

    addSelectedMovie(movie) {
        this.props.selectedMovie(movie);
    }

    filterSelectedMovie() {
        const { id, movies } = this.props;
        const selMovie = movies.length > 0
            ? movies.filter(item => item.id === id)[0]
            : null;

        this.setState(() => ({
            selectedMovie: selMovie
        }))
    }

    render() {
        const { id, movies, role } = this.props;
        const selectedMovie = movies.length > 0
            ? movies.filter(item => item.id === id)[0]
            : null;

        if (movies.length > 0) {
            return (
                <div className="movie__selected">
                    <Movie
                        selectedMovie={selectedMovie || movies[0]}
                        role={role}
                    />
                </div>
            )
        } else {
            return (
                <div className="movie__selected">Wait...</div>
            )
        }

    }

}

MovieSelected.propTypes = {
    id: PropTypes.number
};

const mapStateToProps = state => ({
    movies: getMovies(state),
    role: getChoiceRole(state),
});

const mapDispatchToProps = {
    choiceOfRole: value => choiceOfRole(value),
    selectedMovie: value => selectedMovie(value),
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelected);