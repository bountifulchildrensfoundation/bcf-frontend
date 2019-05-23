import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	links: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,
});

function NavBar(props) {
	const { classes } = props;

	return (
		<AppBar className={classes.appBar} position='fixed' color='default'>
			<Toolbar className={classes.links}>
				<Typography variant='h6' color='inherit'>
					Logo
				</Typography>
				<div>
					<Typography variant='h6' color='inherit'>
						Logout
					</Typography>
				</div>
			</Toolbar>
		</AppBar>
	);
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
