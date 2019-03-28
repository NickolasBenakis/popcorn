
import React, { Component } from 'react'
import popCornLogo from '../logos/popCorn.png';
import './navBar.scss';

export default class navBar extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={popCornLogo} className="App-logo" alt="logo" />
                <span><p id="navBarTitle">popcorn</p></span>
                <div className="navBarLinks">
                    <ul className="navBarLinkList">
                        <li id="homeLink">Home</li>
                        <li id="loginLink">Login</li>
                        <li id="detailsLink">Details</li>
                    </ul>
                </div>
            </header>
        )
    }
}   
