import React, { Component, Fragment } from 'react'
import popCornLogo from '../../../assets/logos/popCorn.png'
import './navBar.scss'
import LoginModal from '../loginModal/loginModal'
import { Modal } from 'react-bootstrap'
import RegisterModal from '../registerModal/registerModal'
class navBar extends Component {
    state = {
        show: false,
        showRegister: false,
    }
    handleClose = () => {
        this.setState({ show: false })
        this.setState({ showRegister: false })
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    showRegister = () => {
        this.setState({ showRegister: true })
    }

    render() {
        const { show } = this.state
        const title = () => {
            if (!this.state.showRegister) {
                return 'Login'
            }
            return 'Register'
        }
        return (
            <Fragment>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title()}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.showRegister ? (
                            <RegisterModal />
                        ) : (
                            <LoginModal childShowRegister={this.showRegister} />
                        )}
                    </Modal.Body>
                </Modal>
                <header className="App-header">
                    <img src={popCornLogo} className="App-logo" alt="logo" />
                    <span>
                        <p id="navBarTitle">popcorn</p>
                    </span>
                    <div className="navBarLinks">
                        <ul className="navBarLinkList">
                            <li id="homeLink">
                                <a href="#MovieTab">Movies</a>
                            </li>
                            <li id="loginLink" onClick={this.handleShow}>
                                Login
                            </li>
                            <li id="detailsLink">Details</li>
                        </ul>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default navBar
