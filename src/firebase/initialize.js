import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
  databaseURL: process.env.REACT_APP_DATABASE_URL ,
  projectId: process.env.REACT_APP_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
};
const app = firebase.initializeApp(config);

export const auth = firebase.auth(app);
export const database = firebase.database(app);

export const googleAuthProvider = firebase.auth.GoogleAuthProvider;
export const facebookAuthProvider = firebase.auth.FacebookAuthProvider;

export default firebase;
