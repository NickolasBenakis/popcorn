import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';
import login from '../../../../api/login/login';

// import { facebookApiID } from '../../../enviromental/api_key';
import { googleClientID } from '../../../api_keys';

import './loginModal.scss';
class LoginModal extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            validEmail: false,
            password: '',
            validPassword: false,
            responseGoogle: {},
            responseFb: {},
            responseLogin: {},
            successLogin: false,
            loginAttempt: false
        };
        this.emailRef = React.createRef();
        this.passRef = React.createRef();
    }

    validateEmail = event => {
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailRegex.test(String(event.target.value).toLowerCase())
            ? this.setState({ validEmail: true })
            : this.setState({ validEmail: false });
    };

    validatePassword = event => {
        // gelaei o kosmos
        this.setState({ validPassword: true });
    };

    renderEmailError = () => {
        return this.state.loginAttempt &&
            !this.state.validEmail &&
            !this.state.validPassword ? (
            <label className="error-color">
                Wrong credentials.Please retry.
            </label>
        ) : null;
    };

    closeModal = () => this.props.childLogIn();

    postCredentials = async () => {
        try {
            const res = await login(
                this.emailRef.current.value,
                this.passRef.current.value
            );
            if (res.error) {
                this.setState({
                    successLogin: false,
                    validEmail: false,
                    validPassword: false,
                    loginAttempt: true
                });
            } else {
                //window.sessionStorage.setItem('token', res.token);
                window.document.cookie = `token=${res.token}`;
                this.props.handleLoginResponse(res);
                this.setState({ successLogin: true, responseLogin: res });
                this.closeModal();
            }
        } catch (error) {
            console.log('Fire Onasis', error);
        }
    };
    handleSubmit = event => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        this.postCredentials();
    };

    enableButton = () => {
        if (this.state.validEmail && this.state.validPassword) return true;
    };

    render() {
        return (
            <Form
                noValidate
                validated={this.state.validEmail && this.state.validPassword}
                onSubmit={this.handleSubmit}>
                <Form.Group
                    className="socialMediaSignIn"
                    controlId="SocialMediaSignIn">
                    <GoogleLogin
                        clientId={googleClientID}
                        buttonText="Login with Google"
                        onSuccess={res => this.props.getGoogleResponse(res)}
                        onFailure={res => this.props.getGoogleResponse(res)}
                        cookiePolicy={'single_host_origin'}
                    />
                </Form.Group>
                <hr />
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        autoComplete="true"
                        onBlur={this.validateEmail}
                        isValid={this.state.validEmail}
                        ref={this.emailRef}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="true"
                        onBlur={this.validatePassword}
                        isValid={this.state.validPassword}
                        ref={this.passRef}
                    />
                    {this.renderEmailError()}
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group> */}
                <div style={{ textAlign: 'center' }}>
                    <Button
                        variant="primary"
                        type="submit"
                        className="submitBtn"
                        disabled={!this.enableButton()}>
                        Login
                    </Button>
                    {/* <Form.Text className="text-muted">
                        <a href="/changePassword">Forgot your password?</a>
                    </Form.Text> */}
                </div>
                <hr />
                <Form.Text className="text-muted">
                    Do you have an account?
                    <button
                        className="a-mime"
                        onClick={() => this.props.childShowRegister()}>
                        Register
                    </button>
                </Form.Text>
            </Form>
        );
    }
}

export default LoginModal;
