import React from 'react';
import {withRouter} from "react-router-dom";

const About = (props) => {

    setTimeout(() => props.history.push('/'), 10000);

    return (
        <div>
            <h1> About</h1>
            <h2>What we are</h2>
            <h2>Our Skills</h2>
            <h2>Why Choose Us?</h2>
        </div>
    )

};

export default withRouter(About);
