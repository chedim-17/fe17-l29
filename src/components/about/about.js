import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class About extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.timerId = setTimeout(() => this.props.history.push('/'), 10000);
    }

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }


    render() {

        return (
            <div>
                <h1> About</h1>
                <h2>What we are</h2>
                <h2>Our Skills</h2>
                <h2>Why Choose Us?</h2>
            </div>
        )
    }

}

export default withRouter(About);
