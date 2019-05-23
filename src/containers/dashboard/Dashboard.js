import ProfileView from '../profileScetion/ProfileView';
import StoryList from '../storySection/StoryListView';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	contentSection: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
	content: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
});

function Dashboard(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.toolbar} />
				<ProfileView />
			</Drawer>
			<main className={classes.contentSection}>
				<div className={classes.toolbar} />
				<div className={classes.content}>
					<StoryList />
				</div>
			</main>
		</div>
	);
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
