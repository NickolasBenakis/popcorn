import React from 'react';
import { Collapse } from 'react-bootstrap';

function NavBarLink({ isLoggedIn, handleShow, handleBadge, openBadge }) {
    return isLoggedIn ? (
        <div className="navBarLinks">
            <ul className="navBarLinkList">
                <li className="link-item m-r-5">
                    <a href="#MovieTab">Movies</a>
                </li>
                <li className="link-item last-link-item">
                    Welcome, Nick
                    <button onClick={handleBadge}></button>
                    <Collapse in={openBadge}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes
                            anderson cred nesciunt sapiente ea proident.
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
                <li className="link-item last-link-item" onClick={handleShow}>
                    Login
                </li>
            </ul>
        </div>
    );
}

export default NavBarLink;
