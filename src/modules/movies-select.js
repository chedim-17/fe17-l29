import React from 'react';
import ContentSearch from '../components/content-search/content-search';
import MoviesList from '../components/movies-list/movies-list';
import MovieSelected from '../components/movie-selected/movie-selected';

const MoviesSelect = props => {
    const defaultId = 1;

    return (
        <div className="App-main">
            <div className="main-content">
                <ContentSearch />
                <MoviesList />
            </div>

            <div className="main-movie">
                <MovieSelected id={parseInt(props.match.params.movieId, 10) || defaultId}/>
            </div>
        </div>
    )
};

export default MoviesSelect;
