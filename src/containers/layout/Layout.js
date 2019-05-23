import React from 'react';
import NavBar from '../../components/navBar/Navbar';

const Layout = props => {
	return (
		<div>
			<NavBar />
			<div>{props.children}</div>
		</div>
	);
};

export default Layout;
