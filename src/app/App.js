import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import CarouselComp from './components/carousel/carouselComp';
import MoviesTab from './components/moviesTab/moviesTab';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyProfile from './components/myProfile/myProfile';
import TheatersTab from './components/theaters/theatersTab';
import BookingTab from './components/booking/bookingTab';
import AdminPanel from './components/adminPanel/adminPanel';
import AdminTableMovies from './components/adminPanel/adminTable/adminTableMovies/adminTableMovies';
import AdminTableUsers from './components/adminPanel/adminTable/adminTableUsers/adminTableUsers';
import AdminTableAuditoriums from './components/adminPanel/adminTable/adminTableAuditoriums/adminTableAuditoriums';
import AdminTableMovieShowings from './components/adminPanel/adminTable/adminTableMovieShowings/adminTableMovieShowings';
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
                    <Route
                        path="/adminPanel"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <AdminPanel />
                            </div>
                        )}
                    />
                    <Route
                        path="/adminPanel/movies"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <AdminTableMovies />
                            </div>
                        )}
                    />
                    <Route
                        path="/adminPanel/users"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <AdminTableUsers />
                            </div>
                        )}
                    />
                    <Route
                        path="/adminPanel/auditoriums"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <AdminTableAuditoriums />
                            </div>
                        )}
                    />
                    <Route
                        path="/adminPanel/movieShowings"
                        exact
                        render={() => (
                            <div className="content-m-top">
                                <AdminTableMovieShowings />
                            </div>
                        )}
                    />
                </Router>
            </div>
        );
    }
}
