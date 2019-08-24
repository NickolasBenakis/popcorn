import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import CarouselComp from './components/carousel/carouselComp';
import MoviesTab from './components/moviesTab/moviesTab';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyProfile from './components/myProfile/myProfile';
import TheatersTab from './components/theaters/theatersTab';
import BookingTab from './components/bookingTab/bookingTab';
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
                        path="/booking"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <BookingTab />
                            </div>
                        )}
                    />
                </Router>
            </div>
        );
    }
}
