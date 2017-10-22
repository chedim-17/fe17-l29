import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteMovie, selectedMovie, fetchMovies } from '../movieActions';
import Stars from '../../star-ratings/react-stars';
import Button from '../../../components/button/button';
import './movie.css';

class Movie extends Component {
    constructor(props) {
        super(props);

        this.renderButtonForAdmin = this.renderButtonForAdmin.bind(this);
        this.handlerButtonDelete = this.handlerButtonDelete.bind(this);

    }

    handlerButtonDelete() {
        this.props.deleteMovie(this.props.selectedMovie.id);
        this.props.fetchMovies();
    }

    renderButtonForAdmin() {
        const { selectedMovie } = this.props;
        const roleAdmin = 'admin';

        this.props.selMovie(selectedMovie);

        if (this.props.role === roleAdmin) {
            return (
                <div>
                    <Button
                        title="EDIT"
                        className="button__movie"
                        linkTo="/edit-movie"
                        selectedMovie={selectedMovie}
                    /><br/>
                    <Button
                        title="DELETE"
                        className="button__movie"
                        clickHandler={this.handlerButtonDelete}
                    />
                </div>
            )
        }
    }

    render() {
        const { selectedMovie } = this.props;

        return (
            <div key={selectedMovie.id} className="container__movieSelected">
                <div className="content__title">
                    <div>{selectedMovie.title}</div>
                    <div><strong>Likes: </strong>{selectedMovie.likes}</div>
                    <div>
                        <Stars
                            item={selectedMovie}
                            stars={selectedMovie.stars} />
                    </div>
                    {this.renderButtonForAdmin()}
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    deleteMovie: (id) => deleteMovie(id),
    selMovie: value => selectedMovie(value),
    fetchMovies: () => fetchMovies(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);