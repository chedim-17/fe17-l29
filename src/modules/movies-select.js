import React from 'react';
import Filter from '../components/filter/filter';
import MovieSelected from '../components/movie-selected/movie-selected';

const MoviesSelect = props => {
    const defaultId = 1;

    return (
        <div className="App-main">
            <div className="main-content">
                <Filter />
            </div>

            <div className="main-movie">
                <MovieSelected id={parseInt(props.match.params.movieId, 10) || defaultId}/>
            </div>
        </div>
    )
};

export default MoviesSelect;
