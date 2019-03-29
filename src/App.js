import React, { Component } from 'react';
import './App.scss';
import NavBar from './navBar/navBar';
import logo from './logo.svg';
import CarouselComp from './carousel/carouselComp';
export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="Main">
          <NavBar />
          <CarouselComp />
          <img src={logo} style={{ width: "100px", height: "100px", padding: "20px" }} alt="logo"></img>
        </div>
      </div>
    );
  }
}

