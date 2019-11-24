import React, { Component, Fragment } from 'react';
import popCornLogo from '../../../assets/logos/popcorn2.svg';
import './navBar.scss';
import LoginModal from '../modals/loginModal/loginModal';
import RegisterModal from '../modals/registerModal/registerModal';
import getUserById from '../../../api/user/getUserById';
import { Modal } from 'react-bootstrap';
import NavbarLink from './navBarLink/navBarLink';
import { Link, BrowserRouter } from 'react-router-dom';

class navBar extends Component {
    state = {
        showModal: false,
        showRegisterModal: false,
        isLoggedIn: false,
        isGoogleLoggedIn: false,
        openBadge: false,
        loginResponse: {}
    };
    constructor() {
        super();
        this.refreshHandlerLoginState();
    }
    refreshHandlerLoginState = () => {
        // handle refresh
        if (window.performance) {
            if (performance.navigation.type == 1) {
                const id = parseInt(window.sessionStorage.getItem('userID'));
                if (id) {
                    getUserById(id).then(res =>
                        this.setState({ loginResponse: res, isLoggedIn: true })
                    );
                }
            }
        }
    };

    handleLoginResponse = model => {
        this.setState({ loginResponse: model });
        window.sessionStorage.setItem('userID', model && model.userId);
    };

    handleClose = () => {
        this.setState({ showModal: false });
        this.setState({ showRegisterModal: false });
    };

    handleShowModal = () => {
        this.setState({ showModal: true });
    };

    handleShowRegisterModal = () => {
        this.setState({ showRegisterModal: true });
    };
    googleLogIn = () => {
        this.setState({ isGoogleLoggedIn: true });
        this.handleClose();
    };

    logIn = () => {
        console.log('navBar login');
        this.setState({ isLoggedIn: true });
        this.handleClose();
    };
    LogOut = () => {
        console.log('ekana log out');
        this.setState({
            isLoggedIn: false,
            isGoogleLoggedIn: false,
            loginResponse: {}
        });
        window.sessionStorage.removeItem('userID');
        window.document.cookie =
            'token' + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    };

    handleBadge = () => {
        this.setState(prevState => ({
            openBadge: !prevState.openBadge
        }));
    };

    googleResponse = res => {
        console.log(res);
        if (res && !res.error) {
            this.googleLogIn();
        } else if (res.error) {
            console.log(res.error);
        }
    };
    fbResponse = res => {
        console.log(res);
    };

    title = () => {
        if (!this.state.showRegisterModal) {
            return 'Login';
        }
        return 'Register';
    };

    renderBodyContent() {
        return this.state.showRegisterModal ? (
            <RegisterModal
                childLogIn={this.logIn}
                childHandleClose={this.handleClose}
                handleLoginResponse={res => this.handleLoginResponse(res)}
            />
        ) : (
            <LoginModal
                getGoogleResponse={res => this.googleResponse(res)}
                getFbResponse={res => this.fbResponse(res)}
                childShowRegister={this.handleShowRegisterModal}
                childLogIn={this.logIn}
                handleLoginResponse={res => this.handleLoginResponse(res)}
            />
        );
    }

    render() {
        const { showModal } = this.state;
        const { openBadge } = this.state;
        const { isLoggedIn } = this.state;
        const { isGoogleLoggedIn } = this.state;
        const { loginResponse } = this.state;

        return (
            <Fragment>
                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.title()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.renderBodyContent()}</Modal.Body>
                </Modal>
                <header className="App-header col-xs-12">
                    <Link to="/" className="non-link col-sm-4">
                        <img
                            src={popCornLogo}
                            className="App-logo"
                            alt="logo"
                        />
                        <title id="navBarTitle">popcorn</title>
                    </Link>
                    <NavbarLink
                        isGoogleLoggedIn={isGoogleLoggedIn}
                        isLoggedIn={isLoggedIn}
                        handleShowModal={this.handleShowModal}
                        handleBadge={this.handleBadge}
                        openBadge={openBadge}
                        logOut={this.LogOut}
                        badgeImage={this.badgeImage}
                        loginResponse={loginResponse}
                    />
                </header>
            </Fragment>
        );
    }
}

export default navBar;
