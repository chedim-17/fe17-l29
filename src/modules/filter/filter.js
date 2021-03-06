import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesList from './component/movies-list/movies-list';
import { fetchMovies } from '../movie-selected/movieActions';
import { filterList, sortByLikes, sortByRating } from '../../reducers/selectors';
import { getMovies } from '../movie-selected/moviesReducer';
import { getFilterList } from './filterReducer';
import './filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name || '',
            items: []
        };

        this.filterList = this.filterList.bind(this);
        this.sortByLikes = this.sortByLikes.bind(this);
        this.sortByRating = this.sortByRating.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    filterList(e){
        this.setState({ name: e.target.value });
        this.props.filterList(e, this.props.movies);
    }

    sortByLikes() {
        this.props.sortByLikes(this.props.movies);
    }

    sortByRating() {
        this.props.sortByRating(this.props.movies);
    }

    render() {
        const { movies, filter } = this.props;

        return (

            <div className="content-search">
                <h3>Sort movies</h3>
                <form className="form__search">
                    <fieldset>
                        <div>
                            <button
                                type="button"
                                id="sortByLikes"
                                className="button__sortByLikes"
                                onClick={this.sortByLikes}
                            >by likes</button>
                            <button
                                type="button"
                                id="sortByRating"
                                className="button__sortByRating"
                                onClick={this.sortByRating}
                            >by rating</button>
                        </div>
                        <span>Filter:</span>
                        <input
                            type="search"
                            id="searchMovie"
                            className="field__searchMovie"
                            autoFocus="true"
                            placeholder="Filter by name"
                            value={this.state.name}
                            onChange={this.filterList}
                        />
                    </fieldset>
                </form>
                <div className="content-movies">
                    <MoviesList
                        movies={movies}
                        filter={filter}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: getMovies(state),
    filter: getFilterList(state)
});

const mapDispatchToProps = {
    fetchMovies: () => fetchMovies(),
    filterList: (e, movies) => filterList(e, movies),
    sortByLikes: (movies) => sortByLikes(movies),
    sortByRating: (movies) => sortByRating(movies),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
