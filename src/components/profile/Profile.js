import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	bigAvatar: {
		margin: 10,
		marginBottom: 30,
		width: 60,
		height: 60,
	},
};

const Profile = props => {
	const { classes } = props;
	return (
		<List className={classes.content}>
			<div className={classes.content}>
				<Avatar
					alt='Remy Sharp'
					src='/static/images/avatar/1.jpg'
					className={classes.bigAvatar}
				/>
				Profile Name
			</div>
			{['Your Stories', 'Messages', 'Account', 'Edit Profile'].map(text => (
				<ListItem className={classes.content} button key={text}>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
	);
};

export default withStyles(styles)(Profile);
