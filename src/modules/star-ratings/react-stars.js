import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';
import { updateMovie } from '../movie-selected/movieActions';

class Stars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: this.props.item,
            starsNew: this.props.stars
        };

        this.ratingChanged = this.ratingChanged.bind(this);
        this.handleChangeCountStars = this.handleChangeCountStars.bind(this);

    }

    ratingChanged = (newRating) => {
        this.setState(() => ({
            starsNew: newRating
        }));
        this.handleChangeCountStars(newRating);
    };

    handleChangeCountStars(newRating) {
        const data = {...this.state.movie, stars: newRating};
        this.props.updateMovie(data, this.state.movie.id);
    }

    render() {

        return (
            <ReactStars
            count={5}
            value={this.state.starsNew}
            onChange={this.ratingChanged}
            size={24}
            color2={'#ffd700'} />
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    updateMovie: (data, id) => updateMovie(data, id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Stars);