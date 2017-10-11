import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMovie, fetchMovies } from '../../actions/movieActions';
import { getSelectedMovie } from '../../reducers/moviesReducer';
import Button from '../../components/button/button';
import './edit-movie.css';

class EditMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.selectedMovie.title,
            posterUrl: this.props.selectedMovie.posterUrl,
            likes: this.props.selectedMovie.likes,
            stars: this.props.selectedMovie.stars,
            director: this.props.selectedMovie.director,
            actors: this.props.selectedMovie.actors,
            genres: this.props.selectedMovie.genres,
            description: this.props.selectedMovie.description,
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
        this.props.updateMovie(data, this.props.selectedMovie.id);
        this.props.fetchMovies();
    }

    render() {

        return (
            <div className="edit-movie">
                <div className="edit-movie__input">
                    <span>Title</span>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.changeTitle}
                    />
                </div>
                <div className="edit-movie__input">
                    <span>Img url</span>
                    <input
                        type="text"
                        value={this.state.posterUrl}
                        onChange={this.changeImgUrl}
                    />
                </div>
                <div className="edit-movie__input">
                    <span>Likes</span>
                    <input
                        type="text"
                        value={this.state.likes}
                        onChange={this.changeLikes}
                    />
                </div>
                <div className="edit-movie__input">
                    <span>Stars</span>
                    <input
                        type="text"
                        value={this.state.stars}
                        onChange={this.changeStars}
                    />
                </div>
                <div className="edit-movie__input">
                    <span>Director</span>
                    <input
                        type="text"
                        value={this.state.director}
                        onChange={this.changeDirector}
                    />
                </div>
                <div className="edit-movie__input">
                    <span>Actors</span>
                    <input
                        type="text"
                        value={this.state.actors}
                        onChange={this.changeActors}
                    />
                </div>
                <div className="edit-movie__input">
                    <span>Genres</span>
                    <input
                        type="text"
                        value={this.state.genres}
                        onChange={this.changeGenres}
                    />
                </div>
                <div className="edit-movie__input">
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
                    className="edit-movie__button"
                    clickHandler={this.handleSubmit}
                />
                <Button
                    title="Go movies"
                    className="edit-movie__button"
                    clickHandler={this.changeIndicatorCreateMovie}
                    linkTo="/movies"
                />

            </div>
        )
    }
}

EditMovie.defaultProps = {
    editMovie: this.state
};

const mapStateToProps = state => ({
    selectedMovie: getSelectedMovie(state)
});

const mapDispatchToProps = {
    updateMovie: (data, id) => updateMovie(data, id),
    fetchMovies: () => fetchMovies(),
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
