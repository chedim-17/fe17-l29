import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  Reducers  from './reducers/reducers';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const MoviesStore = createStore(Reducers);

ReactDOM.render(
    <Provider store={MoviesStore}>
        <div>
            <HashRouter>
                <App />
            </HashRouter>
        </div>
    </Provider>
    , document.getElementById('root'));

// MoviesStore.subscribe(() => console.log('Store: ', MoviesStore.getState()));

registerServiceWorker();
