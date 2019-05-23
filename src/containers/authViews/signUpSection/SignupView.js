import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,
});

const SignupView = props => {
	const { classes } = props;
	return (
		<div>
			<div className={classes.toolbar} />
			<main className={classes.main}>
				<CssBaseline />
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<form
						onSubmit={e => props.handleRegister(e, props.newUser)}
						className={classes.form}>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='firstname'>First Name</InputLabel>
							<Input
								id='firstname'
								onChange={props.handleChange}
								value={props.newUser.firstname}
								name='firstname'
								autoComplete='firstname'
								autoFocus
							/>
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='name'>Last Name</InputLabel>
							<Input
								id='lastname'
								onChange={props.handleChange}
								value={props.newUser.lastname}
								name='lastname'
								autoComplete='lastname'
								autoFocus
							/>
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='username'>Username</InputLabel>
							<Input
								id='username'
								onChange={props.handleChange}
								value={props.newUser.username}
								name='username'
								autoComplete='username'
								autoFocus
							/>
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='email'>Email Address</InputLabel>
							<Input
								id='email'
								value={props.newUser.email}
								onChange={props.handleChange}
								name='email'
								autoComplete='email'
							/>
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='country'>Country</InputLabel>
							<Input
								id='country'
								name='country'
								value={props.newUser.country}
								autoComplete='country'
								onChange={props.handleChange}
							/>
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='title'>Title</InputLabel>
							<Input
								id='title'
								onChange={props.handleChange}
								value={props.newUser.title}
								name='title'
								autoComplete='title'
							/>
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='password'>Password</InputLabel>
							<Input
								name='password'
								value={props.newUser.password}
								type='password'
								id='password'
								autoComplete='password'
								onChange={props.handleChange}
							/>
						</FormControl>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}>
							Sign in
						</Button>
					</form>
				</Paper>
			</main>
		</div>
	);
};

export default withStyles(styles)(SignupView);
