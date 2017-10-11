import { filterChanged } from '../actions/filterActions';

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


