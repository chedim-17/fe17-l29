import React from 'react';
import Header from './modules/header/header';
import Main from './main/main';
import Footer from './components/footer/footer';
import './App.css';

const App = () => {

        return (
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    };

export default App;
