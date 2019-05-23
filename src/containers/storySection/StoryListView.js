import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Story from '../../components/story/Story';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
	topContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	topInputs: {
		display: 'flex',
		flexDirection: 'column',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	submit: {
		width: theme.spacing.unit * 15,
		height: theme.spacing.unit * 5,
	},
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 80,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		outline: 'none',
	},
});
class StoryList extends Component {
	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Story />
				<Story />
				<Story />
				<Fab color='secondary' aria-label='Add' className={classes.margin}>
					<AddIcon onClick={this.handleOpen} />
				</Fab>
				<Modal
					aria-labelledby='simple-modal-title'
					aria-describedby='simple-modal-description'
					open={this.state.open}
					onClose={this.handleClose}>
					<div style={getModalStyle()} className={classes.paper}>
						<form className={classes.form}>
							<div className={classes.topContent}>
								<div className={classes.topInputs}>
									<FormControl margin='normal' required>
										<Typography htmlFor='country'>Country</Typography>
										<TextField
											id='country'
											name='country'
											autoComplete='country'
											autoFocus
											variant='outlined'
										/>
									</FormControl>
									<FormControl margin='normal' required>
										<Typography htmlFor='title'>Title</Typography>
										<TextField
											name='title'
											type='title'
											id='title'
											variant='outlined'
											autoComplete='current-title'
										/>
									</FormControl>
									<FormControl margin='normal' required>
										<Typography htmlFor='date'>Date</Typography>
										<TextField
											name='date'
											type='date'
											id='date'
											variant='outlined'
											autoComplete='current-date'
										/>
									</FormControl>
								</div>
								<Button
									type='submit'
									variant='outlined'
									color='primary'
									className={classes.submit}>
									X
								</Button>
								<Button
									type='submit'
									variant='outlined'
									color='primary'
									className={classes.submit}>
									Add
								</Button>
							</div>
							<FormControl margin='normal' required fullWidth>
								<Typography htmlFor='description'>Description</Typography>
								<TextField
									id='filled-multiline-static'
									multiline
									rows='5'
									margin='normal'
									variant='outlined'
								/>
							</FormControl>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

export default withStyles(styles)(StoryList);
