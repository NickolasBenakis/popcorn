import React, { Component } from 'react'
import './App.scss'
import NavBar from './components/navBar/navBar'
import CarouselComp from './components/carousel/carouselComp'
import MoviesTab from './components/moviesTab/moviesTab'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RegisterModal from './components/registerModal/registerModal'
export default class App extends Component {
    render() {
        return (
            <div className="Main">
                <Router>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <div>
                                <NavBar />
                                <CarouselComp />
                                <MoviesTab />
                            </div>
                        )}
                    />
                    {/* <Route
                        path="/signup"
                        exact
                        render={() => (
                            <div>
                                <RegisterModal />
                            </div>
                        )}
                    /> */}
                </Router>
            </div>
        )
    }
}
