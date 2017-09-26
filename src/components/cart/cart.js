import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../star-ratings/react-stars';
import '../../styles/cart.css';

class Cart extends Component {
    render() {
        const { selectedMovie } = this.props;

        return (
            <div>
                { selectedMovie.map(item => {
                    return (
                        <div key={item.id} className="container__movieSelected">
                            <div className="content__title">
                                <div>{item.title}</div>
                                <div><strong>Likes: </strong>{item.likes}</div>
                                <div><Stars stars={item.stars} /></div>
                            </div>
                            <div className="content__main">
                                <img className="item__movieSelected"
                                     alt={item.title}
                                     title={item.title}
                                     src={item.posterUrl}
                                />
                                <div className="item__description">
                                    <strong>Director: </strong>{item.director}
                                </div>
                                <div className="item__description">
                                    <strong>Actors: </strong>{item.actors.join(', ')}
                                </div>
                                <div className="item__description">
                                    <strong>Genres: </strong>{item.genres.join(', ')}
                                </div>
                                <div className="item__description">
                                    <strong>Description: </strong>{item.description}
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

Cart.propTypes = {
    selectedMovie: PropTypes.array
};

export default Cart;