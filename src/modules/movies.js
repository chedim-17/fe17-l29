import React, { Component } from 'react';
import ContentSearch from '../components/content-search/content-search';
import MoviesList from '../components/movies-list/movies-list';
import MovieSelected from '../components/movie-selected/movie-selected';

class Movies extends Component {

    render() {

        return (
            <div className="App-main">
                <div className="main-content">
                    <ContentSearch />

                    <div className="content-movies">
                        <MoviesList />
                    </div>
                </div>

                <div className="main-movie">
                    <MovieSelected />
                </div>
            </div>
        )
    }

}

export default Movies;
