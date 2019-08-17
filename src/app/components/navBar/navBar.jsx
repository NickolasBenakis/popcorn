import React, { Component, Fragment } from 'react';
import popCornLogo from '../../../assets/logos/popCorn.png';
import './navBar.scss';
import LoginModal from '../loginModal/loginModal';

import { Modal } from 'react-bootstrap';
import RegisterModal from '../registerModal/registerModal';
import NavbarLink from './navBarLink/navBarLink';
import { Link } from 'react-router-dom';
class navBar extends Component {
    state = {
        show: false,
        showRegister: false,
        isLoggedIn: false,
        isGoogleLoggedIn: false,
        openBadge: false,
    };

    handleClose = () => {
        this.setState({ show: false });
        this.setState({ showRegister: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    showRegister = () => {
        this.setState({ showRegister: true });
    };
    googleLogIn = () => {
        this.setState({ isGoogleLoggedIn: true });
        this.handleClose();
    };

    logIn = () => {
        this.setState({ isLoggedIn: true });
        this.handleClose();
    };
    handleBadge = () => {
        this.setState(prevState => ({
            openBadge: !prevState.openBadge,
        }));
    };

    googleResponse = res => {
        console.log(res);
        if (res && !res.error) {
            this.googleLogIn();
        }
    };
    fbResponse = res => {
        console.log(res);
    };

    title = () => {
        if (!this.state.showRegister) {
            return 'Login';
        }
        return 'Register';
    };

    renderBodyContent() {
        return this.state.showRegister ? (
            <RegisterModal
                childLogIn={this.logIn}
                childHandleClose={this.handleClose}
            />
        ) : (
            <LoginModal
                getGoogleResponse={res => this.googleResponse(res)}
                getFbResponse={res => this.fbResponse(res)}
                childShowRegister={this.showRegister}
            />
        );
    }

    render() {
        const { show } = this.state;
        const { openBadge } = this.state;
        const { isLoggedIn } = this.state;
        const { isGoogleLoggedIn } = this.state;

        return (
            <Fragment>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.title()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.renderBodyContent()}</Modal.Body>
                </Modal>
                <header className="App-header">
                    <Link to="/" className="non-link">
                        <img
                            src={popCornLogo}
                            className="App-logo"
                            alt="logo"
                        />
                        <span>
                            <p id="navBarTitle">popcorn</p>
                        </span>
                    </Link>
                    <NavbarLink
                        isGoogleLoggedIn={isGoogleLoggedIn}
                        isLoggedIn={isLoggedIn}
                        handleShow={this.handleShow}
                        handleBadge={this.handleBadge}
                        openBadge={openBadge}
                    />
                </header>
            </Fragment>
        );
    }
}

export default navBar;
