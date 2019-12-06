import React, { Component, Fragment } from 'react';
import popCornLogo from '../../../assets/logos/popcorn2.svg';
import './navBar.scss';
import LoginModal from '../modals/loginModal/loginModal';
import RegisterModal from '../modals/registerModal/registerModal';
import getUserById from '../../../api/user/getUserById';
import thirdPartyLogin from '../../../api/login/thirdPartyLogin';
import { Modal } from 'react-bootstrap';
import NavbarLink from './navBarLink/navBarLink';
import { Link } from 'react-router-dom';

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
        this.loginStateHandler();
    }
    loginStateHandler = () => {
        const id = parseInt(window.sessionStorage.getItem('userID'));

        // handle refresh && address change in navigation url
        if (window.performance) {
            if (
                parseInt(performance.navigation.type) === 1 ||
                parseInt(performance.navigation.type) === 0
            ) {
                if (id) {
                    getUserById(id).then(res =>
                        this.setState({ loginResponse: res, isLoggedIn: true })
                    );
                }
            }
        }
    };

    handleLoginResponse = model => {
        if (model) {
            this.setState({ loginResponse: model });
            console.log(model);
            window.sessionStorage.setItem('userID', model.userId);
            window.sessionStorage.setItem('token', model.token);
            window.sessionStorage.setItem(
                'roleID',
                model.role && model.role.roleId
            );
        }
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
        window.sessionStorage.removeItem('roleID');
        window.sessionStorage.removeItem('token');
        window.document.cookie =
            'token' + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;';
    };

    handleBadge = () => {
        this.setState(prevState => ({
            openBadge: !prevState.openBadge
        }));
    };

    googleResponse = async res => {
        let model = await thirdPartyLogin(res.accessToken);
        if (model && !model.error) {
            this.setState({ loginResponse: model });
            window.sessionStorage.setItem('userID', model.userId);
            window.sessionStorage.setItem('token', model.token);
            window.sessionStorage.setItem(
                'roleID',
                model.role && model.role.roleId
            );
            this.googleLogIn();
        } else if (res.error) {
            console.log(res.error);
        }
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
                    <span className="layout-header">
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
                    </span>
                </header>
            </Fragment>
        );
    }
}

export default navBar;
