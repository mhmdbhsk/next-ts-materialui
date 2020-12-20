import * as firebase from 'firebase';
import * as firebaseAdmin from 'firebase-admin';
import 'firebase/auth';

export const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

if (typeof window !== 'undefined' && !firebase.default.apps.length) {
  firebase.default.initializeApp(config);
  firebase.default
    .auth()
    .setPersistence(firebase.default.auth.Auth.Persistence.SESSION);
}

const provider = new firebase.default.auth.GoogleAuthProvider();

export { firebase, provider };
