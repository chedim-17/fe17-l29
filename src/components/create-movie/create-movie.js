import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMovie, updateMovie, indicatorCreateMovie } from '../../actions/actions';
import { getNewMovie, getSelectedMovie } from '../../reducers/moviesReducer';
import Button from '../../components/button/button';

import './create-movie.css';

class CreateMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: !this.props.newMovie ? this.props.selectedMovie.title : '',
            posterUrl: !this.props.newMovie ? this.props.selectedMovie.posterUrl : '',
            likes: !this.props.newMovie ? this.props.selectedMovie.likes : '',
            stars: !this.props.newMovie ? this.props.selectedMovie.stars : '',
            director: !this.props.newMovie ? this.props.selectedMovie.director : '',
            actors: !this.props.newMovie ? this.props.selectedMovie.actors : [],
            genres: !this.props.newMovie ? this.props.selectedMovie.genres : [],
            description: !this.props.newMovie ? this.props.selectedMovie.description : '',
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changeImgUrl = this.changeImgUrl.bind(this);
        this.changeLikes = this.changeLikes.bind(this);
        this.changeStars = this.changeStars.bind(this);
        this.changeDirector = this.changeDirector.bind(this);
        this.changeActors = this.changeActors.bind(this);
        this.changeGenres = this.changeGenres.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeIndicatorCreateMovie = this.changeIndicatorCreateMovie.bind(this);
    }

    changeTitle(e) {
        this.setState({ title: e.target.value })
    }

    changeImgUrl(e) {
        this.setState({ posterUrl: e.target.value })
    }

    changeLikes(e) {
        this.setState({ likes: e.target.value })
    }

    changeStars(e) {
        this.setState({ stars: e.target.value })
    }

    changeDirector(e) {
        this.setState({ director: e.target.value })
    }

    changeActors(e) {
        this.setState({ actors: e.target.value.split(',') })
    }

    changeGenres(e) {
        this.setState({ genres: e.target.value.split(',') })
    }

    changeDescription(e) {
        this.setState({ description: e.target.value })
    }

    handleSubmit() {
        const data = this.state;
        this.props.indicatorCreateMovie(false);
        this.props.newMovie
        ? this.props.createMovie(data)
        : this.props.updateMovie(data, this.props.selectedMovie.id);

    }

    changeIndicatorCreateMovie() {
        this.props.indicatorCreateMovie(false);
    }

    render() {

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
                        value={this.state.posterUrl}
                        onChange={this.changeImgUrl}
                    />
                </div>
                <div className="create-movie__input">
                    <span>Likes</span>
                    <input
                        type="text"
                        value={this.state.likes}
                        onChange={this.changeLikes}
                    />
                </div>
                <div className="create-movie__input">
                    <span>Stars</span>
                    <input
                        type="text"
                        value={this.state.stars}
                        onChange={this.changeStars}
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
                    title="Submit"
                    className="create-movie__button"
                    clickHandler={this.handleSubmit}
                />
                <Button
                    title="Go movies"
                    className="create-movie__button"
                    clickHandler={this.changeIndicatorCreateMovie}
                    linkTo="/movies"
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
    updateMovie: (data, id) => updateMovie(data, id),
    indicatorCreateMovie: value => indicatorCreateMovie(value),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie);
