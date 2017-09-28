import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../star-ratings/react-stars';
import './movie.css';

class Movie extends Component {
    render() {
        const { selectedMovie } = this.props;

        return (
            <div key={selectedMovie.id} className="container__movieSelected">
                <div className="content__title">
                    <div>{selectedMovie.title}</div>
                    <div><strong>Likes: </strong>{selectedMovie.likes}</div>
                    <div><Stars stars={selectedMovie.stars} /></div>
                </div>
                <div className="content__main">
                    <img className="item__movieSelected"
                         alt={selectedMovie.title}
                         title={selectedMovie.title}
                         src={selectedMovie.posterUrl}
                    />
                    <div className="item__description">
                        <strong>Director: </strong>{selectedMovie.director}
                    </div>
                    <div className="item__description">
                        <strong>Actors: </strong>{selectedMovie.actors.join(', ')}
                    </div>
                    <div className="item__description">
                        <strong>Genres: </strong>{selectedMovie.genres.join(', ')}
                    </div>
                    <div className="item__description">
                        <strong>Description: </strong>{selectedMovie.description}
                    </div>
                </div>
            </div>
        )
    }
}

Movie.propTypes = {
    selectedMovie: PropTypes.object
};

export default Movie;