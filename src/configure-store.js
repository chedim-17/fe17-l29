import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import  Reducers  from './reducers/reducers';

const loggerMiddleware = createLogger();
const configureStore = () => {
    return createStore(
        Reducers,
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware // neat middleware that logs actions
        )
    );
};

// const createStoreWithMiddleware = applyMiddleware(
//     thunk
// )(createStore);
// const MoviesStore = () => {
//     createStoreWithMiddleware(Reducers)
// };

export default configureStore;
