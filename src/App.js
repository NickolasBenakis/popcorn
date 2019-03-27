import React, { Component } from 'react';
import './App.css';
import NavBar from './navBar/navBar';
import logo from './logo.svg';
export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <NavBar />
        <div className="Main">
          Hello Content'
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    );
  }
}

