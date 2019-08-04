import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import CarouselComp from './components/carousel/carouselComp';
import MoviesTab from './components/moviesTab/moviesTab';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyProfile from './components/myProfile/myProfile';
import TheatersTab from './components/theaters/theatersTab';
import MovieDetailsTab from './components/movieDetails/movieDetailsTab';
export default class App extends Component {
    render() {
        return (
            <div id="Main-content" className="Main">
                <Router>
                    <Route path="/" component={NavBar} />
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <CarouselComp />
                                <MoviesTab />
                            </div>
                        )}
                    />
                    <Route
                        path="/myProfile"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <MyProfile />
                            </div>
                        )}
                    />
                    <Route
                        path="/theaters"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <TheatersTab />
                            </div>
                        )}
                    />
                    <Route
                        path="/movieDetails"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <MovieDetailsTab />
                            </div>
                        )}
                    />
                </Router>
            </div>
        );
    }
}
