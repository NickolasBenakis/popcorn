import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './registerModal';
import uploadImage from '../../../../api/image/uploadImage';
import { cdnOptions } from '../../../api_keys';
class RegisterModal extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			validEmail: false,
			password: '',
			validPassword: false,
			imageUrl: ''
		};
	}
	handleFile = async e => {
		const files = Array.from(e.target.files);
		const fileName = files[0].name;
		const file = files[0];
		const formData = new FormData();
		formData.append('file', file, fileName);
		formData.append('upload_preset', cdnOptions.upload_preset);
		console.log(formData);
		let res = await uploadImage(cdnOptions.username, formData);
		if (res) {
			this.setState({ imageUrl: res.secure_url });
		}
		console.log(res);
	};

	componentDidMount() {
		console.log('Register');
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
			<Form method="POST" name="registerForm">
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="email"
						placeholder="Enter email"
						autoComplete="true"
						onBlur={this.validateEmail}
						isValid={this.state.validEmail}
					/>
				</Form.Group>
				<Form.Group controlId="formName">
					<Form.Control
						type="text"
						placeholder="Enter Name"
						autoComplete="true"
					/>
				</Form.Group>
				<Form.Group controlId="formSurname">
					<Form.Control
						type="text"
						placeholder="Enter Surname"
						autoComplete="true"
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Control
						type="password"
						placeholder="Enter Password"
						autoComplete="true"
						onBlur={this.validatePassword}
						isValid={this.state.validPassword}
					/>
				</Form.Group>
				<Form.Group controlId="formUploadFile">
					<Form.Control
						type="file"
						placeholder="upload"
						onChange={this.handleFile}
					/>
				</Form.Group>
				<hr />
				<div style={{ textAlign: 'center' }}>
					<Button
						variant="primary"
						id="submitBtn"
						className="submitBtn"
						onClick={() => this.props.childLogIn()}>
						Register
					</Button>
				</div>
			</Form>
		);
	}
}

export default RegisterModal;
