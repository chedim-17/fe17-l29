import React, { Component } from 'react';
import '../../styles/content-search.css';

class ContentSearch extends Component {
    render() {
        return (

            <div className="content-search">
                <h3>Sort movies</h3>
                <form className="form__search">
                    <fieldset>
                        <div>
                            <button  type="button" id="sortByLikes" className="button__sortByLikes">by likes</button>
                            <button  type="button" id="sortByRating" className="button__sortByRating">by rating</button>
                        </div>
                        <button  type="button" id="buttonSearchMovie" className="button__searchMovie">search</button>
                        <input type="search" id="searchMovie" className="field__searchMovie" placeholder="Search by name"/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ContentSearch;
