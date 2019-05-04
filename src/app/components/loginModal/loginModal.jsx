import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './loginModal.scss';
import fbLogo from '../../../assets/logos/fb.svg';
export default class LoginModal extends React.Component {


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
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="true" />
          <Form.Text className="text-muted">
            <a href="">Forgot your email?</a>
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" autoComplete="true" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit" id="submitBtn">
            Σύνδεση
          </Button>
          <Form.Text className="text-muted">
            <a href="">Forgot your password?</a>
          </Form.Text>
        </div>
        <hr />
        <Form.Text className="text-muted">
          Δεν έχετε Λογαριασμό? <a href="">Εγγραφή</a>
        </Form.Text>
      </Form>
    );
  }
}
