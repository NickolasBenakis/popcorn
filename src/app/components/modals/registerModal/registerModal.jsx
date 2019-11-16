import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './registerModal';
import uploadImage from '../../../../api/image/uploadImage';
import { cdnOptions } from '../../../api_keys';
import addUser from '../../../../api/user/addUser';
class RegisterModal extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			validEmail: false,
			password: '',
			validPassword: false,
			imageUrl: '',
			validFileSize: true
		};
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
		this.firstNameRef = React.createRef();
		this.surNameRef = React.createRef();
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
	handleFile = async e => {
		let files = Array.from(e.target.files);
		const fileName = files[0] && files[0].name;
		const file = files[0];
		if (file && file.size <= 200000) {
			this.setState({ validFileSize: true });
			const formData = new FormData();
			formData.append('file', file, fileName);
			formData.append('upload_preset', cdnOptions.upload_preset);
			let res = await uploadImage(cdnOptions.username, formData);
			if (res) {
				this.setState({ imageUrl: res.secure_url });
			}
		} else {
			document.querySelector('#imageUploader').value = '';
			this.setState({ validFileSize: false });
		}
	};

	handleSubmit = async e => {
		e.preventDefault();
		const bodyPayload = {
			Password: this.passwordRef.current.value,
			Email: this.emailRef.current.value,
			FirstName: this.firstNameRef.current.value,
			LastName: this.surNameRef.current.value,
			imageUrl: this.state.imageUrl,
			Role: {
				RoleId: 1
			}
		};

		try {
			let res = await addUser(bodyPayload);
			console.log(res);
			if (res) {
				this.handleLogin();
			}
		} catch (error) {
			throw new Error(error);
		}
	};

	handleLogin = () => this.props.childLogIn();

	render() {
		const { validFileSize } = this.state;
		return (
			<Form
				method="POST"
				name="registerForm"
				onSubmit={this.handleSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						ref={this.emailRef}
						type="email"
						placeholder="Enter email"
						autoComplete="true"
						onBlur={this.validateEmail}
						isValid={this.state.validEmail}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formName">
					<Form.Control
						ref={this.firstNameRef}
						type="text"
						placeholder="Enter Name"
						autoComplete="true"
						required
					/>
				</Form.Group>
				<Form.Group controlId="formSurname">
					<Form.Control
						ref={this.surNameRef}
						type="text"
						placeholder="Enter Surname"
						autoComplete="true"
						required
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Control
						ref={this.passwordRef}
						type="password"
						placeholder="Enter Password"
						autoComplete="true"
						onBlur={this.validatePassword}
						isValid={this.state.validPassword}
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						id="imageUploader"
						type="file"
						placeholder="upload"
						onChange={this.handleFile}
						required
					/>
					{validFileSize ? null : (
						<Alert variant={'warning'}>Max size 200Kb!</Alert>
					)}
				</Form.Group>
				<hr />
				<div style={{ textAlign: 'center' }}>
					<Button
						type="submit"
						variant="primary"
						id="submitBtn"
						className="submitBtn">
						Register
					</Button>
				</div>
			</Form>
		);
	}
}

export default RegisterModal;
