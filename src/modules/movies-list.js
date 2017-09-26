import React, { Component } from 'react';
import moviesData  from '../movies.json';
import Stars from '../components/star-ratings/react-stars';
import like from '../img/like16.png';
import dislike from '../img/dislike16.png';
import '../styles/movies-list.css';

class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedMovie: 1,
        };

        this.handleSelectMovie = this.handleSelectMovie.bind(this);
    }

    handleSelectMovie(e) {
        const selectMovieId = e.id;

        this.setState({
            selectedMovie: e.id
        });

        this.props.onHandleSelectMovie(selectMovieId);
    }

    render() {

        return (
            <div className="movie__container">
                {moviesData.movies.map(item => {
                    return (
                        <div className="container__item" key={item.id}>
                            <div className="item__title">
                                <a onClick={() => this.handleSelectMovie(item)}>{item.title}</a>
                            </div>
                            <div className="item__likes wrapper">
                                <div className="item__likes">
                                    <a href="#">
                                        <img src={like} className="item__likes-like" alt="like"/>
                                    </a>
                                </div>
                                <div className="item__likes">
                                    <a href="#">
                                        <img src={dislike} className="item__likes-dislike" alt="dislike"/>
                                    </a>
                                </div>

                                <div>likes</div>
                                <div>{item.likes}</div>

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
        )
    }

}

export default MoviesList;
