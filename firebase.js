import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCS4KuIbLP5fBej1eOxbNdS3ssOQijwadg",
    authDomain: "test1-49f56.firebaseapp.com",
    databaseURL: "https://test1-49f56.firebaseio.com",
    projectId: "test1-49f56",
    storageBucket: "test1-49f56.appspot.com",
    messagingSenderId: "37369244048"
};

export const firebaseApp = firebase.initializeApp(config);

