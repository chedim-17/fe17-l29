import React from 'react';
import Filter from '../components/filter/filter';
import MovieSelected from '../components/movie-selected/movie-selected';

const Movies = () => {

    return (
        <div className="App-main">
            <div className="main-content">
                <Filter />
            </div>

            <div className="main-movie">
                <MovieSelected />
            </div>
        </div>
    );
};

export default Movies;
