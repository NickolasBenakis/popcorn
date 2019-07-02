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

    logIn = () => {
        this.setState({ isLoggedIn: true });
        this.handleClose();
    };
    handleBadge = () => {
        this.setState(prevState => ({
            openBadge: !prevState.openBadge,
        }));
    };

    render() {
        const { show } = this.state;
        const { openBadge } = this.state;
        const { isLoggedIn } = this.state;
        const title = () => {
            if (!this.state.showRegister) {
                return 'Login';
            }
            return 'Register';
        };
        return (
            <Fragment>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.showRegister ? (
                            <RegisterModal
                                childLogIn={this.logIn}
                                childHandleClose={this.handleClose}
                            />
                        ) : (
                            <LoginModal childShowRegister={this.showRegister} />
                        )}
                    </Modal.Body>
                </Modal>
                <header className="App-header">
                    <Link to="/">
                        <img
                            src={popCornLogo}
                            className="App-logo"
                            alt="logo"
                        />
                    </Link>
                    <span>
                        <p id="navBarTitle">popcorn</p>
                    </span>
                    <NavbarLink
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
