import React from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarLink({ isLoggedIn, handleShow, handleBadge, openBadge }) {
    return isLoggedIn ? (
        <div className="navBarLinks">
            <ul className="navBarLinkList">
                <li className="link-item m-r-5">
                    <a href="#MovieTab">Movies</a>
                </li>
                <li
                    className={
                        openBadge
                            ? 'avatar-container'
                            : 'link-item avatar-container'
                    }
                >
                    <span className="avatar" onClick={handleBadge}></span>
                    <Collapse in={openBadge}>
                        <div
                            id="example-collapse-text"
                            className="collapse-options"
                        >
                            <ul className="menu-list">
                                <Link to="/myProfile">
                                    <li className="link-item option">
                                        my profile
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li className="link-item option">
                                        Sign out
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </Collapse>
                </li>
            </ul>
        </div>
    ) : (
        <div className="navBarLinks">
            <ul className="navBarLinkList">
                <li className="link-item m-r-5">
                    <a href="#MovieTab">Movies</a>
                </li>
                <li className="link-item" onClick={handleShow}>
                    Login
                </li>
            </ul>
        </div>
    );
}

export default NavBarLink;
