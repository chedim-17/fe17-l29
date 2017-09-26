import React, { Component } from 'react';
import logo from './logo.svg';
import ContentSearch from './components/content-search/content-search';
import MoviesList from './modules/movies-list';
import MovieSelected from './modules/movie-selected';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedMovie: 1,
        };

        this.handleSelectedMovie = this.handleSelectedMovie.bind(this);

    }

    handleSelectedMovie(id) {
        this.setState({selectedMovie: id})
    }

    render() {
        let selectedMovieId = this.state.selectedMovie;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Movies</h2>
                </div>
                <div className="App-main">
                    <div className="main-content">
                        <ContentSearch />

                        <div className="content-movies">
                            <div className="movies-item"></div>
                            <MoviesList onHandleSelectMovie={this.handleSelectedMovie} />
                        </div>
                    </div>
                    <div className="main-movie">
                        <MovieSelected id={selectedMovieId} />
                    </div>
                </div>
                <div className="App-footer">
                    <h2>EPAM</h2>
                </div>
            </div>
        );
    }

}

export default App;
