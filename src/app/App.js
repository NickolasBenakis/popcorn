import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import CarouselComp from './components/carousel/carouselComp';
import MoviesTab from './components/moviesTab/moviesTab';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyProfile from './components/myProfile/myProfile';
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
                    <Route
                        path="/myProfile"
                        exact
                        render={() => (
                            <div>
                                <MyProfile />
                            </div>
                        )}
                    />
                    <Route path="/theaters" exact render={() => <div></div>} />
                    <Route path="/movie" exact render={() => <div></div>} />
                </Router>
            </div>
        );
    }
}
