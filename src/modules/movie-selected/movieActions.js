import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SELECTED_MOVIE = 'SELECTED_MOVIE';

const api = 'http://localhost:3001/movies';

export const fetchMovies = () => {
    return (dispatch) => {
        return axios.get(api)
            .then(response => {
                dispatch(_fetchMovies(response))
            })
            .catch(error => console.log(error))
    };
};

const _fetchMovies = payload => ({
    type: FETCH_MOVIES,
    payload,
});

export const addMovie  = (data) => {
    return (dispatch) => {
        return axios.post(api, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                dispatch(_addMovie(response))
            })
            .catch(error => console.log(error))
    };
};

const _addMovie = payload  => {
    return {
        type: ADD_MOVIE,
        payload
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
        return axios.put(`${api}/${id}`, data)
            .then(response => dispatch(_updateMovie(response)))
    };
};

const _updateMovie = payload => ({
    type: UPDATE_MOVIE,
    payload,
});

export const deleteMovie = (id) => {
    return (dispatch) => {
        return axios.delete(`${api}/${id}`)
            .then(response => dispatch(_deleteMovie(response)))
    };
};

const _deleteMovie = payload => ({
    type: DELETE_MOVIE,
    payload,
});