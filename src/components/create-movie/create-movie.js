import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMovie } from '../../actions/actions';
import { getNewMovie, getSelectedMovie } from '../../reducers/moviesReducer';
import Button from '../../components/button/button';

import './create-movie.css';

class CreateMovie extends Component {
    constructor(props) {
        super(props);
        console.log('this.props in CreateMovie', this.props);

        this.state = {
            title: this.props.selectedMovie ? this.props.selectedMovie.title : '',
            imgUrl: this.props.selectedMovie ? this.props.selectedMovie.posterUrl : '',
            director: this.props.selectedMovie ? this.props.selectedMovie.director : '',
            actors: this.props.selectedMovie ? this.props.selectedMovie.actors : '',
            genres: this.props.selectedMovie ? this.props.selectedMovie.genres : '',
            description: this.props.selectedMovie ? this.props.selectedMovie.description : '',
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changeImgUrl = this.changeImgUrl.bind(this);
        this.changeDirector = this.changeDirector.bind(this);
        this.changeActors = this.changeActors.bind(this);
        this.changeGenres = this.changeGenres.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeTitle(e) {
        this.setState({ title: e.target.value })
    }

    changeImgUrl(e) {
        this.setState({ imgUrl: e.target.value })
    }

    changeDirector(e) {
        this.setState({ director: e.target.value })
    }

    changeActors(e) {
        this.setState({ actors: e.target.value })
    }

    changeGenres(e) {
        this.setState({ genres: e.target.value })
    }

    changeDescription(e) {
        this.setState({ description: e.target.value })
    }

    handleSubmit() {
        const data = this.state;
        console.log('data', data);
        this.props.createMovie(data);
    }

    render() {
        const movies = '/movies';
        const submit = 'Submit';
        const goMovies = 'Go movies';
        console.log('props in create-movie', this.props);

        return (
            <div className="create-movie">
                <div className="create-movie__input">
                    <span>Title</span>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.changeTitle}
                    />
                </div>
                <div className="create-movie__input">
                    <span>Img url</span>
                    <input
                        type="text"
                        value={this.state.imgUrl}
                        onChange={this.changeImgUrl}
                    />
                </div>
                <div className="create-movie__input">
                    <span>Director</span>
                    <input
                        type="text"
                        value={this.state.director}
                        onChange={this.changeDirector}
                    />
                </div>
                <div className="create-movie__input">
                    <span>Actors</span>
                    <input
                        type="text"
                        value={this.state.actors}
                        onChange={this.changeActors}
                    />
                </div>
                <div className="create-movie__input">
                    <span>Genres</span>
                    <input
                        type="text"
                        value={this.state.genres}
                        onChange={this.changeGenres}
                    />
                </div>
                <div className="create-movie__input">
                    <span>Description</span>
                    <textarea
                        cols="60"
                        rows="10"
                        value={this.state.description}
                        onChange={this.changeDescription}
                    />
                </div>
                <Button
                    title={submit}
                    className="create-movie__button"
                    clickHandler={this.handleSubmit}
                />
                <Button
                    title={goMovies}
                    className="create-movie__button"
                    linkTo={movies}
                />

            </div>
        )
    }
}

CreateMovie.defaultProps = {
    createMovie: this.state
};

const mapStateToProps = state => ({
    newMovie: getNewMovie(state),
    selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = {
    createMovie: data => createMovie(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie);
