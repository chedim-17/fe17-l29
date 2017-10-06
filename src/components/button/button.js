import React, { PropTypes } from 'react';
// import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ButtonLink = ({ title, linkTo, value,  clickHandler, className }) => {
    let result = null;
    result = linkTo ? (
            <Link to={linkTo}>
                <button value={value} className={className}>{title}</button>
            </Link>
        ) : (
            <button value={value} onClick={clickHandler} className={className}>{title}</button>
        );
    return result;
};

ButtonLink.propTypes = {
    title: PropTypes.string,
    // color: PropTypes.string,
    linkTo: PropTypes.string,
    clickHandler: PropTypes.func
};

ButtonLink.defaultProps = {
    title: 'button',
    // color: '#066',
    // background: '#666',
    linkTo: '',
    clickHandler: () => {}
};

export default ButtonLink;
