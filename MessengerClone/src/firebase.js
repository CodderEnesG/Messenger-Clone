import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAFDXIMvJ2plRCa3hG1g2Ub74v80edmGaA',
  authDomain: 'facebook-messengerclone.firebaseapp.com',
  databaseURL: 'https://facebook-messengerclone.firebaseio.com',
  projectId: 'facebook-messengerclone',
  storageBucket: 'facebook-messengerclone.appspot.com',
  messagingSenderId: '393414558150',
  appId: '1:393414558150:web:200c4190ce1fa6f73ef2c7',
  measurementId: 'G-7VXKS81N6G',
});

const db = firebaseApp.firestore();
export default db;
