import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginView from './loginSection/LoginView';
import SignupView from './signUpSection/SignupView';
import { login, register } from '../../store/actions/userActions';

class AuthView extends Component {
	state = {
		registering: false,
		user: {
			firstname: '',
			lastname: '',
			country: '',
			title: '',
			email: '',
			username: '',
			password: '',
		},
		submitted: false,
		error: null,
	};

	handleChange = e => {
		this.setState({
			user: {
				...this.state.user,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleRegister = (e, creds) => {
		e.preventDefault();
		this.props.register(creds);
		if (!!this.props.error) {
			this.setState(
				{
					user: {
						firstName: '',
						lastName: '',
						emailAddress: '',
						displayName: '',
						password: '',
					},
					submitted: true,
					error: null,
				},
				() => {
					setTimeout(() => this.setState({ submitted: false }), 2000);
				},
			);
		}
	};

	handleLogin = e => {
		e.preventDefault();
		this.props.login({
			email: this.state.user.email,
			password: this.state.user.password,
		});
		this.setState({
			user: {
				firstname: '',
				lastname: '',
				country: '',
				title: '',
				email: '',
				username: '',
				password: '',
			},
			submitted: !this.state.submitted,
		});
	};

	toggleRegister = () => {
		this.setState({
			registering: !this.state.registering,
		});
	};

	render() {
		return (
			<div>
				{this.state.registering === false ? (
					<LoginView
						submitted={this.state.submitted}
						handleChange={this.handleChange}
						toggleRegister={this.toggleRegister}
						isRegistering={this.state.registering}
						handleLogin={this.handleLogin}
					/>
				) : (
					<SignupView
						submitted={this.state.submitted}
						handleChange={this.handleChange}
						newUser={this.state.user}
						handleRegister={this.handleRegister}
						toggleRegister={this.toggleRegister}
					/>
				)}
			</div>
		);
	}
}

export default connect(
	null,
	{ login, register },
)(AuthView);
