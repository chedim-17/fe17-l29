import axios from 'axios';

export const ADD_MOVIES = 'ADD_MOVIES';
export const FILTER_CHANGED = 'FILTER_CHANGED';
export const CHOICE_ROLE = 'CHOICE_ROLE';
export const INDICATOR_CREATE_MOVIE = 'INDICATOR_CREATE_MOVIE';
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SELECTED_MOVIE = 'SELECTED_MOVIE';

const api = 'http://localhost:3001/movies';

export const fetchMovies = () => {
    return (dispatch) => {
        return axios.get(api)
            .then(response => {
                dispatch(addMovies(response))
            })
            .catch(error => console.log(error))
    };
};

export const createMovie  = (data) => {
    return (dispatch) => {
        return axios.post(`${api}`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                dispatch(_createMovie(response))
            })
            .catch(error => console.log(error))
    };
};

const addMovies = payload => ({
        type: ADD_MOVIES,
        payload,
});

export const filterList = (e, movies) => {
    let filteredList = [].concat(movies)
        .filter((item) => {
            return item.title.toLowerCase()
                .search(e.target.value.toLowerCase()) !== -1;
        });
    return filterChanged(filteredList);
};

export const sortByLikes = (movies) => {
    let sortMovies = [].concat(movies)
        .sort((a, b) => b.likes - a.likes);
    return filterChanged(sortMovies);
};

export const sortByRating = (movies) => {
    let sortMovies = [].concat(movies)
        .sort((a, b) => b.stars - a.stars);
    return filterChanged(sortMovies);
};

export const filterChanged = (value) => {
    return {
        type: FILTER_CHANGED,
        payload: { value }
    }
};

export const choiceOfRole = (value) => {
    return {
        type: CHOICE_ROLE,
        payload: { value }
    }
};

export const indicatorCreateMovie = (value) => {
    return {
        type: INDICATOR_CREATE_MOVIE,
        payload: { value }
    }
};

export const selectedMovie = (value) => {
    return {
        type: SELECTED_MOVIE,
        payload: { value }
    }
};

export const updateMovie = (data, id) => {
    return (dispatch) => {
        return axios.put(`http://localhost:3001/movies/${id}`, data)
            .then(response => dispatch(_updateMovie(response)))
    };
};

const _updateMovie = payload => ({
    type: UPDATE_MOVIE,
    payload,
});

export const deleteMovie = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:3001/movies/${id}`)
            .then(response => dispatch(_deleteMovie(response)))
    };
};

const _deleteMovie = payload => ({
    type: DELETE_MOVIE,
    payload,
});

const _createMovie = payload  => {
    return {
        type: CREATE_MOVIE,
        payload
    }
};
