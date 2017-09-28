import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../components/home/home';
import About from '../components/about/about';
import Movies from '../modules/movies';
import MoviesSelect from '../modules/movies-select';

const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/movies' component={Movies}/>
            <Route path='/movies/:movieId' component={MoviesSelect}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
);

export default Main;
