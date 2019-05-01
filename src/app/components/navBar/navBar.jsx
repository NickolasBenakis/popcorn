
import React, { Component } from 'react'
import popCornLogo from '../../../assets/logos/popCorn.png';
import './navBar.scss';
import LoginModal from '../loginModal/loginModal';
import { Modal, Button } from 'react-bootstrap';


export default class navBar extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><LoginModal /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <header className="App-header">
                    <img src={popCornLogo} className="App-logo" alt="logo" />
                    <span><p id="navBarTitle">popcorn</p></span>
                    <div className="navBarLinks">
                        <ul className="navBarLinkList">
                            <li id="homeLink">Home</li>
                            <li id="loginLink" onClick={this.handleShow}>Login</li>
                            <li id="detailsLink">Details</li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}   
