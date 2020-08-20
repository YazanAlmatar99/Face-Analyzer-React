
import firebase from 'firebase'
import "firebase/storage"
  var firebaseConfig = {
    apiKey: "AIzaSyBDGePDXKZozF6iIoiXtX88ocjtp0seKJE",
    authDomain: "uploadimages-86c5a.firebaseapp.com",
    databaseURL: "https://uploadimages-86c5a.firebaseio.com",
    projectId: "uploadimages-86c5a",
    storageBucket: "uploadimages-86c5a.appspot.com",
    messagingSenderId: "911865889790",
    appId: "1:911865889790:web:c7af24891abd0b6d3836af"
  };
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export {
    storage, firebase as default
}
