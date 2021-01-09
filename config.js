import firebase from 'firebase'

var FirebaseKeys = {
    apiKey: "Your_API_Key",
    authDomain: "auth_Domain",
    projectId: "project_Id",
    storageBucket: "storage_Bucket",
    messagingSenderId: "message_Sender_Id",
    appId: "app_Id"
  };
  // Initialize Firebase
  firebase.initializeApp(FirebaseKeys);
  
export default FirebaseKeys
