import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import CarouselComp from './components/carousel/carouselComp';
import MoviesTab from './components/moviesTab/moviesTab';
import { BrowserRouter as Router, Route } from 'react-router-dom';
export default class App extends Component {
    render() {
        return (
            <div className="Main">
                <Router>
                    <Route path="/" component={NavBar} />
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <div>
                                <CarouselComp />
                                <MoviesTab />
                            </div>
                        )}
                    />
                    <Route path="/myProfile" exact render={() => (
                    <div></div>
                    )} />
                </Router>
            </div>
        );
    }
}
