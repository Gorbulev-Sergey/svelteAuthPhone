import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBHEhtO7AtePj-X045LXPL4XS8AC_FDB2Q',
	authDomain: 'sveltetaxi.firebaseapp.com',
	databaseURL: 'https://sveltetaxi-default-rtdb.firebaseio.com',
	projectId: 'sveltetaxi',
	storageBucket: 'sveltetaxi.appspot.com',
	messagingSenderId: '824838237845',
	appId: '1:824838237845:web:bb901776bd631f4e34f59c',
	measurementId: 'G-FC90G60B07'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
