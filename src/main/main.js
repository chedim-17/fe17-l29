import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../components/home/home';
import About from '../components/about/about';
import Movies from '../components/movies/movies';
import MoviesSelect from '../components/movies-select/movies-select';
import EditMovie from '../modules/movie-selected/edit-movie/edit-movie';
import AddMovie from '../modules/header/add-movie/add-movie';

const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/movies' component={Movies}/>
            <Route path='/movies/:movieId' component={MoviesSelect}/>
            <Route path='/about' component={About}/>
            <Route path='/edit-movie' component={EditMovie}/>
            <Route path='/add-movie' component={AddMovie}/>
        </Switch>
    </main>
);

export default Main;
