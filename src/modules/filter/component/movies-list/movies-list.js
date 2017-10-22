import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CounterLikes from '../../counter-likes/counter-likes';
import Stars from '../../../star-ratings/react-stars';
import './movies-list.css';

class MoviesList extends Component {

    render() {
        let moviesList = this.props.filter !== undefined
            ? this.props.filter
            : this.props.movies;

        return (
            <div className="movie__container">

                {moviesList.map(item => {
                    return (
                        <div className="container__item" key={item.id}>
                            <div className="item__title">
                                <Link to={`/movies/${item.id}`} replace>{item.title}</Link>
                            </div>
                            <div className="item__likes wrapper">
                                <CounterLikes item={item}/>
                            </div>
                            <img className="item__movie"
                                 alt={item.title}
                                 key={item.id}
                                 title={item.title}
                                 src={item.posterUrl}
                            />
                            <div className="item__rating">
                                <Stars
                                    item={item}
                                    stars={item.stars}
                                />

                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MoviesList;
