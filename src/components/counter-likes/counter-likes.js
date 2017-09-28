import React, { Component } from 'react';
import like from '../../img/like16.png';
import dislike from '../../img/dislike16.png';
import './counter-likes.css';

class CounterLikes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.likes
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {

        return (
            <div>
                <div className="item__likes item__icon">
                    <img src={like} className="item__likes-like" alt="like" onClick={this.incrementCount}/>
                </div>
                <div className="item__dislikes item__icon">
                    <img src={dislike} className="item__likes-dislike" alt="dislike" onClick={this.decrementCount}/>
                </div>
                <div>likes</div>
                <div>{this.state.count}</div>
            </div>
        )
    }

}

export default CounterLikes;