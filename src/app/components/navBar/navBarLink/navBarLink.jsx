import React from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarLink({
    logOut,
    isLoggedIn,
    isGoogleLoggedIn,
    handleShowModal,
    handleBadge,
    openBadge
}) {
    function googleLoggedInContent() {
        return isGoogleLoggedIn ? (
            <Link to="/">
                <li className="link-item option" onClick={() => logOut()}>
                    Sign out
                </li>
            </Link>
        ) : (
            <Link to="/">
                <li className="link-item option" onClick={() => logOut()}>
                    Sign out
                </li>
            </Link>
        );
    }

    function logStatusContent() {
        return isLoggedIn || isGoogleLoggedIn ? (
            <li
                className={
                    openBadge
                        ? 'avatar-container'
                        : 'link-item avatar-container'
                }>
                <span className="avatar" onClick={handleBadge}></span>
                <Collapse in={openBadge}>
                    <div
                        id="example-collapse-text"
                        className="collapse-options">
                        <ul className="menu-list">
                            <Link to="/myProfile">
                                <li className="link-item option">my profile</li>
                            </Link>
                            {googleLoggedInContent()}
                        </ul>
                    </div>
                </Collapse>
            </li>
        ) : (
            <li className="link-item" onClick={handleShowModal}>
                Login
            </li>
        );
    }

    function displayMovieTab() {
        return window.location.pathname === '/' ? (
            <li className="link-item m-r-10 ">
                <a href="#MovieTab">Movies</a>
            </li>
        ) : (
            <li className="link-item m-r-10 ">
                <Link to="/">Movies</Link>
            </li>
        );
    }

    return (
        <div className="navBarLinks col-sm-8-offset">
            <ul className="navBarLinkList">
                <li className="link-item m-r-10">
                    <Link to="/theaters">
                        Theaters
                    </Link>
                </li>
                {displayMovieTab()}
                {logStatusContent()}
            </ul>
        </div>
    );
}

export default NavBarLink;
