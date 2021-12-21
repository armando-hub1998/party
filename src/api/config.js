import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAVHBye85ZAZ3QY63uEdQreoqDl0nQs9-M",
    authDomain: "party-app-akt.firebaseapp.com",
    databaseURL: "https://party-app-akt-default-rtdb.firebaseio.com",
    projectId: "party-app-akt",
    storageBucket: "party-app-akt.appspot.com",
    messagingSenderId: "53654888591",
    appId: "1:53654888591:web:abdaf1fb5275a621f190fa",
    measurementId: "G-P6PZ3R8BSV"
};

export default () => initializeApp(firebaseConfig);
