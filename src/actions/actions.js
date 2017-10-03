import moviesData  from '../movies.json';
export const ADD_MOVIES = 'ADD_MOVIES';
export const FILTER_CHANGED = 'FILTER_CHANGED';

export const fetchMovies = () => {
    return addMovies(moviesData);
};

const addMovies = payload => ({
        type: ADD_MOVIES,
        payload,
});

export const filterList = (e) => {
    let updatedList = moviesData.movies;
    updatedList = updatedList.filter((item) => {
        return item.title.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
    });
    return filterChanged(updatedList);
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
