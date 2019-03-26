
import React, { Component } from 'react'
import popCornLogo from '../logos/popCorn.png';
import './navBar.css';

export default class navBar extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={popCornLogo} className="App-logo" alt="logo" />
                <span><p style={{ display: "inline-flex" }}>popcorn</p></span>

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
