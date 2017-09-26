import React, { Component } from 'react';
import ReactStars from 'react-stars';

class Stars extends Component {

    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        };

        return (
            <ReactStars
            count={5}
            value={this.props.stars}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
        )
    }
}

export default Stars;

