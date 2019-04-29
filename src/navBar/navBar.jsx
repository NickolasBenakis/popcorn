
import React, { Component } from 'react'
import popCornLogo from '../logos/popCorn.png';
import './navBar.scss';
import LoginModal from '../loginModal/loginModal';
import { Modal } from 'antd';


export default class navBar extends Component {

    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <LoginModal />
                </Modal>
                <header className="App-header">
                    <img src={popCornLogo} className="App-logo" alt="logo" />
                    <span><p id="navBarTitle">popcorn</p></span>
                    <div className="navBarLinks">
                        <ul className="navBarLinkList">
                            <li id="homeLink">Home</li>
                            <li id="loginLink" onClick={this.showModal}>Login</li>
                            <li id="detailsLink">Details</li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}   
