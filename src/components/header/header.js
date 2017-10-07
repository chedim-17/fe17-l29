import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChoiceRole } from '../../reducers/roleReducer';
import { choiceOfRole } from '../../actions/actions';
import logo from '../.././logo.svg';
import Button from '../../components/button/button';
import './header.css';



// const Header = () => {
class Header extends Component {
    constructor(props) {
        super(props);

        this.handlerRole = this.handlerRole.bind(this);
        this.renderCreateButton = this.renderCreateButton.bind(this);
    }

    handlerRole(e) {
        this.props.choiceOfRole(e.target.value);
    }

    renderCreateButton() {
        const roleAdmin = 'admin';
        console.log('this.props', this.props);

        if (this.props.role === roleAdmin) {
            return (
                <Button
                    title="CREATE MOVIE"
                    className="item__button"
                    linkTo="/create-movie"
                />
            )
        }
    }

    render() {

        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="header__menu">
                    <ul className="menu__list">
                        <li className="list__item">
                            <Button title='USER'
                                    value="user"
                                    className="item__button"
                                    clickHandler={this.handlerRole}
                            />
                        </li>
                        <li className="list__item">
                            <Button title='ADMIN'
                                    value="admin"
                                    className="item__button"
                                    clickHandler={this.handlerRole}
                            />
                        </li>
                        <li className="list__item"><NavLink to="/" className="item__link">Home</NavLink></li>
                        <li className="list__item"><Link to="/movies" className="item__link">Movies</Link></li>
                        <li className="list__item"><Link to="/about" className="item__link">About</Link></li>
                        <li className="list__item">
                            {this.renderCreateButton()}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    role: getChoiceRole(state),

});

const mapDispatchToProps = {
    choiceOfRole: value => choiceOfRole(value),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
