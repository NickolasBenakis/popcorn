
import React, { Component, Fragment } from 'react'
import popCornLogo from '../../../assets/logos/popCorn.png';
import './navBar.scss';
import LoginModal from '../loginModal/loginModal';
import { Modal } from 'react-bootstrap';


export default class navBar extends Component {
    state = {
        show: false,
    };
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        const { show } = this.state;
        return (
            <Fragment>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Είσοδος</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><LoginModal /></Modal.Body>
                </Modal>
                <header className="App-header">
                    <img src={popCornLogo} className="App-logo" alt="logo" />
                    <span><p id="navBarTitle">popcorn</p></span>
                    <div className="navBarLinks">
                        <ul className="navBarLinkList">
                            <li id="homeLink"><a href="#MovieTab">Movies</a></li>
                            <li id="loginLink" onClick={this.handleShow}>Login</li>
                            <li id="detailsLink">Details</li>
                        </ul>
                    </div>
                </header>
            </Fragment>
        )
    }
}   
