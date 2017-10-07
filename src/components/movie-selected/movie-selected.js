import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies, getSelectedMovie } from '../../reducers/moviesReducer';
import { getChoiceRole } from '../../reducers/roleReducer';
import { choiceOfRole, selectedMovie } from '../../actions/actions';
import Movie from '../movie/movie';
import './movie-selected.css';

class MovieSelected extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            selectedMovie: {}
        };

        this.addSelectedMovie = this.addSelectedMovie.bind(this);
        this.filterSelectedMovie = this.filterSelectedMovie.bind(this);

    }

    componentWillReceiveProps() {
        this.filterSelectedMovie();
        console.log('this state in movieSelected', this.state);
        this.addSelectedMovie(this.state.selectedMovie);
    }

    addSelectedMovie(movie) {
        this.props.selectedMovie(movie);
    }

    filterSelectedMovie() {
        const { id, movies } = this.props;
        const selectedMovie = movies.length > 0 ?
            movies.filter(item => item.id === id)[0] :
            null;
        this.setState({ selectedMovie });
    }

    render() {
        const { id, movies, role } = this.props;
        const selectedMovie = movies.length > 0 ?
            movies.filter(item => item.id === id)[0] :
            null;

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
    selectedMovie: getSelectedMovie(state),
});

const mapDispatchToProps = {
    choiceOfRole: value => choiceOfRole(value),
    selectedMovie: value => selectedMovie(value),
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelected);
