import React, { Component } from 'react';
import './App.scss';
import NavBar from './components/navBar/navBar';
import CarouselComp from './components/carousel/carouselComp';
import MoviesTab from './components/moviesTab/moviesTab';
export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="Main">
          <NavBar />
          <CarouselComp />
          <MoviesTab />
        </div>
      </div>
    );
  }
}

