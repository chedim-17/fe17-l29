import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/movieActions';
import Button from '../../components/button/button';
import './add-movie.css';

class AddMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            posterUrl: '',
            likes: '',
            stars: '',
            director: '',
            actors: [],
            genres: [],
            description: '',
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
        this.props.addMovie(data);
    }

    render() {

        return (
            <div className="add-movie">
                <div className="add-movie__input">
                    <span>Title</span>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.changeTitle}
                    />
                </div>
                <div className="add-movie__input">
                    <span>Img url</span>
                    <input
                        type="text"
                        value={this.state.posterUrl}
                        onChange={this.changeImgUrl}
                    />
                </div>
                <div className="add-movie__input">
                    <span>Likes</span>
                    <input
                        type="text"
                        value={this.state.likes}
                        onChange={this.changeLikes}
                    />
                </div>
                <div className="add-movie__input">
                    <span>Stars</span>
                    <input
                        type="text"
                        value={this.state.stars}
                        onChange={this.changeStars}
                    />
                </div>
                <div className="add-movie__input">
                    <span>Director</span>
                    <input
                        type="text"
                        value={this.state.director}
                        onChange={this.changeDirector}
                    />
                </div>
                <div className="add-movie__input">
                    <span>Actors</span>
                    <input
                        type="text"
                        value={this.state.actors}
                        onChange={this.changeActors}
                    />
                </div>
                <div className="add-movie__input">
                    <span>Genres</span>
                    <input
                        type="text"
                        value={this.state.genres}
                        onChange={this.changeGenres}
                    />
                </div>
                <div className="add-movie__input">
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
                    className="add-movie__button"
                    clickHandler={this.handleSubmit}
                />
                <Button
                    title="Go movies"
                    className="add-movie__button"
                    linkTo="/movies"
                />
            </div>
        )
    }
}

AddMovie.defaultProps = {
    addMovie: this.state
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    addMovie: data => addMovie(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
