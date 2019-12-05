import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/Footer';
import CarouselComp from './components/carousel/carouselComp';
import MoviesTab from './components/moviesTab/moviesTab';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import MyProfile from './components/myProfile/myProfile';
import TheatersTab from './components/theaters/theatersTab';
import BookingTab from './components/booking/bookingTab';
import AdminPanel from './components/adminPanel/adminPanel';
import AdminTableMovies from './components/adminPanel/adminTable/adminTableMovies/adminTableMovies';
import AdminTableUsers from './components/adminPanel/adminTable/adminTableUsers/adminTableUsers';
import AdminTableAuditoriums from './components/adminPanel/adminTable/adminTableAuditoriums/adminTableAuditoriums';
import AdminTableMovieShowings from './components/adminPanel/adminTable/adminTableMovieShowings/adminTableMovieShowings';
import ReportsTable from './components/adminPanel/reportsTable/reportsTable';
import SearchReservation from './components/searchReservation/searchReservation';
import PrivateRoute from '../app/services/privateRoute.js';
import ReservationPipeline from './components/reservationPipeline/reservationPipeline';
import RetryPattern from './components/retryPattern/retryPattern';
export default class App extends Component {
    render() {
        return (
            <div id="Main-content" className="Main">
                <Router>
                    <Route path="/" component={NavBar} />
                    <Switch>
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
                        <PrivateRoute
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
                        <PrivateRoute
                            path="/booking"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <BookingTab />
                                </div>
                            )}
                        />
                        <PrivateRoute
                            adminRoute={true}
                            path="/adminPanel"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <AdminPanel />
                                </div>
                            )}
                        />
                        <PrivateRoute
                            adminRoute={true}
                            path="/adminPanel/movies"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <AdminTableMovies />
                                </div>
                            )}
                        />
                        <PrivateRoute
                            adminRoute={true}
                            path="/adminPanel/users"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <AdminTableUsers />
                                </div>
                            )}
                        />
                        <PrivateRoute
                            adminRoute={true}
                            path="/adminPanel/auditoriums"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <AdminTableAuditoriums />
                                </div>
                            )}
                        />
                        <PrivateRoute
                            adminRoute={true}
                            path="/adminPanel/movieShowings"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <AdminTableMovieShowings />
                                </div>
                            )}
                        />
                        <PrivateRoute
                            adminRoute={true}
                            path="/adminPanel/reports"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <ReportsTable />
                                </div>
                            )}
                        />
                        <Route
                            path="/searchReservation"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <SearchReservation />
                                </div>
                            )}
                        />
                        <Route
                            path="/reservation_pipeline"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <ReservationPipeline />
                                </div>
                            )}
                        />
                        <Route
                            path="/retry_pattern"
                            exact
                            render={() => (
                                <div className="content-m-top">
                                    <RetryPattern />
                                </div>
                            )}
                        />
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                    <Route path="/" component={Footer} />
                </Router>
            </div>
        );
    }
}
