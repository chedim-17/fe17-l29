import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMovie } from '../../actions/movieActions';
import like from '../../img/like16.png';
import dislike from '../../img/dislike16.png';
import './counter-likes.css';

class CounterLikes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: this.props.item,
            likes: this.props.item.likes
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.handleChangeCountLikes = this.handleChangeCountLikes.bind(this);
    }

    incrementCount() {
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }));
    }

    decrementCount() {
        this.setState(prevState => ({
            likes: prevState.likes - 1
        }));
    }

    componentDidUpdate() {
        this.handleChangeCountLikes()
    }

    handleChangeCountLikes() {
        const data = {...this.state.movie, likes: this.state.likes};
        this.props.updateMovie(data, this.state.movie.id);
    }

    render() {

        return (
            <div>
                <div className="item__likes item__icon">
                    <img
                        src={like}
                        className="item__likes-like"
                        alt="like"
                        onClick={this.incrementCount}
                    />
                </div>
                <div className="item__dislikes item__icon">
                    <img
                        src={dislike}
                        className="item__likes-dislike"
                        alt="dislike"
                        onClick={this.decrementCount}
                    />
                </div>
                <div>likes</div>
                <div>{this.state.likes}</div>
            </div>
        )
    }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    updateMovie: (data, id) => updateMovie(data, id),
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterLikes);