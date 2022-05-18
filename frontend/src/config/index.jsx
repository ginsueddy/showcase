import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDXWyZ9GtASZBQ0-7QUSZibtbxuRvM2kr0",
    authDomain: "cultured-dlv.firebaseapp.com",
    projectId: "cultured-dlv",
    storageBucket: "cultured-dlv.appspot.com",
    messagingSenderId: "624853595436",
    appId: "1:624853595436:web:df7056ca9ec1fd90e7a889"
};


export const firebaseApp = initializeApp(firebaseConfig);

export const SERVER_URL = 'BACKEND_URL_FROM_TONY'