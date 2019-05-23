import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
};

firebase.initializeApp(config);

const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuth };
