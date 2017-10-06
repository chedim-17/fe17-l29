import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './configure-store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const MoviesStore = configureStore();

ReactDOM.render(
    <Provider store={MoviesStore}>
        <div>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    </Provider>
    , document.getElementById('root'));

// MoviesStore.subscribe(() => console.log('Store: ', MoviesStore.getState()));

registerServiceWorker();
