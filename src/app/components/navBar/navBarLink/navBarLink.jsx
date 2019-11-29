import React from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../../../assets/avatar-placeholder.png';
function NavBarLink({
    logOut,
    isLoggedIn,
    isGoogleLoggedIn,
    handleShowModal,
    handleBadge,
    openBadge,
    loginResponse
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
    const avatarImage = res => (res && res.length > 1 ? `url(${res})` : null);

    const isAdmin = loginResponse => {
        return (
            loginResponse &&
            loginResponse.role &&
            loginResponse.role.roleId === 2
        );
    };
    function logStatusContent() {
        return isLoggedIn || isGoogleLoggedIn ? (
            <li
                className={
                    openBadge
                        ? 'avatar-container'
                        : 'link-item avatar-container'
                }>
                <span
                    style={{
                        backgroundImage: avatarImage(loginResponse.imageUrl),
                        backgroundSize: 'cover'
                    }}
                    data-img={loginResponse.imageUrl}
                    className="avatar"
                    onClick={handleBadge}></span>
                <Collapse in={openBadge}>
                    <div
                        id="example-collapse-text"
                        className="collapse-options">
                        <ul className="menu-list">
                            <Link to="/myProfile">
                                <li className="link-item option">my profile</li>
                            </Link>
                            {isAdmin(loginResponse) ? (
                                <Link to="/adminPanel">
                                    <li className="link-item option">
                                        admin panel
                                    </li>
                                </Link>
                            ) : null}
                            {googleLoggedInContent()}
                        </ul>
                    </div>
                </Collapse>
            </li>
        ) : window.sessionStorage.getItem('userID') ? (
            <li
                className={
                    openBadge
                        ? 'avatar-container'
                        : 'link-item avatar-container'
                }>
                <span
                    style={{
                        backgroundImage: avatarImage(defaultAvatar),
                        backgroundSize: 'cover'
                    }}
                    className="avatar"></span>
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
                    <Link to="/searchReservation">check-in</Link>
                </li>
                {/* <li className="link-item m-r-10">
                    <Link to="/theaters">Theaters</Link>
                </li> */}
                {displayMovieTab()}
                {logStatusContent()}
            </ul>
        </div>
    );
}

export default NavBarLink;
