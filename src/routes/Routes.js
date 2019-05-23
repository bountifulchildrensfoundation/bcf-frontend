import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthView from '../containers/authViews/AuthView';
import Layout from '../containers/layout/Layout';
import Dashboard from '../containers/dashboard/Dashboard';

class Routes extends Component {
	render() {
		let routes;

		if (this.props.isLoggedIn) {
			routes = (
				<Switch>
					<Redirect from='/auth' to='/' />
					<Route path='/' component={Dashboard} />
				</Switch>
			);
		} else {
			routes = (
				<Switch>
					<Redirect exact from='/' to='/auth' />
					<Route path='/auth' component={AuthView} />
					<Redirect to='/auth' />
				</Switch>
			);
		}
		return <Layout>{routes}</Layout>;
	}
}
const mapStateToProps = state => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn,
	};
};

export default connect(
	mapStateToProps,
	{},
)(Routes);
