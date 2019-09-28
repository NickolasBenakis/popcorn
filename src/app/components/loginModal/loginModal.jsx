import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

// import { facebookApiID } from '../../../enviromental/api_key';
// import { googleClientID } from '../../../enviromental/api_key';

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
            responseFb: {}
        };
    }

    validateEmail = event => {
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailRegex.test(String(event.target.value).toLowerCase())
            ? this.setState({ validEmail: true })
            : this.setState({ validEmail: false });
    };

    validatePassword = event => {
        const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        passRegex.test(String(event.target.value).toLowerCase())
            ? this.setState({ validPassword: true })
            : this.setState({ validPassword: false });
    };

    render() {
        return (
            <Form>
                <Form.Group
                    className="socialMediaSignIn"
                    controlId="SocialMediaSignIn"
                >
                    {/* <GoogleLogin
                        clientId={googleClientID}
                        buttonText="Login with Google"
                        onSuccess={res => this.props.getGoogleResponse(res)}
                        onFailure={res => this.props.getGoogleResponse(res)}
                        cookiePolicy={'single_host_origin'}
                    />
                    <FacebookLogin
                        cssClass="fb-button"
                        appId={facebookApiID}
                        fields="name,email,picture"
                        onClick={res => this.props.getFbResponse(res)}
                        callback={res => this.props.getFbResponse(res)}
                    /> */}
                </Form.Group>
                <hr />
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        autoComplete="true"
                        onBlur={this.validateEmail}
                        isValid={this.state.validEmail}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="true"
                        onBlur={this.validatePassword}
                        isValid={this.state.validPassword}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div style={{ textAlign: 'center' }}>
                    <Button variant="primary" type="submit" id="submitBtn">
                        Login
                    </Button>
                    <Form.Text className="text-muted">
                        <a href="2">Forgot your password?</a>
                    </Form.Text>
                </div>
                <hr />
                <Form.Text className="text-muted">
                    Do you have an account?
                    <button
                        className="a-mime"
                        onClick={() => this.props.childShowRegister()}
                    >
                        Register
                    </button>
                </Form.Text>
            </Form>
        );
    }
}

export default LoginModal;
