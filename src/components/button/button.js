import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ title, linkTo, value,  clickHandler, className }) => {
    let result = null;
    result = linkTo ? (
            <Link to={linkTo}>
                <button value={value} className={className} onClick={clickHandler}>{title}</button>
            </Link>
        ) : (
            <button value={value} onClick={clickHandler} className={className}>{title}</button>
        );
    return result;
};

ButtonLink.propTypes = {
    title: PropTypes.string,
    linkTo: PropTypes.string,
    clickHandler: PropTypes.func
};

ButtonLink.defaultProps = {
    title: 'button',
    linkTo: '',
    clickHandler: () => {}
};

export default ButtonLink;
