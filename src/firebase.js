import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCOEz-y-Vo0o5-FtrHrUTQ_7nfeaJ0Lb_Y",
    authDomain: "todoist-9f3e4.firebaseapp.com",
    databaseURL: "https://todoist-9f3e4.firebaseio.com",
    projectId: "todoist-9f3e4",
    storageBucket: "todoist-9f3e4.appspot.com",
    messagingSenderId: "50193742697",
    appId: "1:50193742697:web:d5ff007dd9d7be11319bf8"
})

export {firebaseConfig as firebase} ;