import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		marginBottom: 30,
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2,
	},
	headerContent: {
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
	},
});

function Story(props) {
	const { classes } = props;

	return (
		<Paper className={classes.root} elevation={2}>
			<div className={classes.headerContent}>
				<Typography variant='h6' component='h5'>
					Country
				</Typography>
				<Typography variant='h5' component='h3'>
					Story Title
				</Typography>
				<div>Buttons</div>
			</div>
			<Typography component='p'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
				beatae dolorum sed excepturi quisquam perspiciatis asperiores eaque.
				Culpa a eius vero amet ad doloribus. Ipsum repudiandae illo sed. Ab,
				illum.
			</Typography>
		</Paper>
	);
}

Story.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Story);
