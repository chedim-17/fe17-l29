import React from 'react';
import moviesData  from '../../movies.json';
import { Link } from 'react-router-dom';
import CounterLikes from '../counter-likes/counter-likes';
import Stars from '../star-ratings/react-stars';
import './movies-list.css';

const MoviesList = () => {

    return (
        <div className="movie__container">
            {moviesData.movies.map(item => {
                return (
                    <div className="container__item" key={item.id}>
                        <div className="item__title">
                            <Link to={`/movies/${item.id}`} replace >{item.title}</Link>
                        </div>
                        <div className="item__likes wrapper">
                            <CounterLikes likes={item.likes}/>
                        </div>
                        <img className="item__movie"
                             alt={item.title}
                             key={item.id}
                             title={item.title}
                             src={item.posterUrl}
                        />
                        <div className="item__rating">
                            <Stars stars={item.stars} />

                        </div>
                    </div>
                )
            })}
        </div>
    );

};

export default MoviesList;
