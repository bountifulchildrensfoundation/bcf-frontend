import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block',
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
		width: '100%',
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
	toolbar: theme.mixins.toolbar,
});

const LoginView = props => {
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
					<h4 style={{ color: 'red' }}>
						{props.error === 'auth/user-not-found' && 'User not found'}
					</h4>
					<ValidatorForm
						className={classes.form}
						onSubmit={props.handleEmailLogin}>
						<FormControl margin='normal' required fullWidth>
							<TextValidator
								label='Email'
								onChange={props.handleChange}
								name='email'
								value={props.email}
								validators={['required', 'email']}
								errorMessages={['this field is required', 'email is not valid']}
							/>
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<TextValidator
								label='Password'
								type='password'
								onChange={props.handleChange}
								name='password'
								value={props.password}
								validators={['required', 'password']}
								errorMessages={['this field is required']}
							/>
						</FormControl>
						<br />
						<Button
							disabled={props.submitted}
							onClick={e => props.handleLogin(e)}
							fullWidth
							variant='contained'
							className={classes.submit}>
							{(props.submitted && 'Your form is submitted!') ||
								(!props.submitted && 'Sign in')}
						</Button>
						<div
							style={{
								margin: 5,
								display: 'flex',
								justifyContent: 'center',
							}}>
							<Button
								variant='contained'
								className={classes.submit}
								onClick={props.toggleRegister}>
								Click to register
							</Button>
						</div>
					</ValidatorForm>
				</Paper>
			</main>
		</div>
	);
};

export default withStyles(styles)(LoginView);
