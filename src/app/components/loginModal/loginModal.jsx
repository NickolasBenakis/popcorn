import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './loginModal.scss';


class LoginModal extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      validEmail: false,
      password: '',
      validPassword: false
    }
  }

  validateEmail = (event) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (emailRegex.test(String(event.target.value).toLowerCase())) ?
      this.setState({ validEmail: true }) : this.setState({ validEmail: false });
  }

  validatePassword = (event) => {
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    (passRegex.test(String(event.target.value).toLowerCase())) ?
      this.setState({ validPassword: true }) : this.setState({ validPassword: false });
  }


  render() {

    return (
      <Form>
        <Form.Group className="socialMediaSignIn" controlId="SocialMediaSignIn">
          <Button variant="primary" type="submit">
            <ion-icon id="fbLogo" name="logo-facebook"></ion-icon>
            Σύνδεση μέσω Facebook
          </Button>
          <Button variant="outline-success" type="submit">
            <ion-icon id="googleLogo" name="logo-google"></ion-icon>
            Σύνδεση μέσω Google
          </Button>
        </Form.Group>
        <hr />
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" autoComplete="true" onBlur={this.validateEmail} isValid={this.state.validEmail} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" autoComplete="true" onBlur={this.validatePassword} isValid={this.state.validPassword} />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit" id="submitBtn">
            Σύνδεση
          </Button>
          <Form.Text className="text-muted">
            <a href="2">Forgot your password?</a>
          </Form.Text>
        </div>
        <hr />
        <Form.Text className="text-muted">
          Δεν έχετε Λογαριασμό? <a href="3">Εγγραφή</a>
        </Form.Text>
      </Form>
    );
  }
}


export default LoginModal;