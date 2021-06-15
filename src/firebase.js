// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";


  
  
  const firebaseApp=firebase.initializeApp(
    {apiKey: "AIzaSyDkHjoZRXosfpHcJKastmehcRLjLlunQHo",
    authDomain: "facebook-messenger-clone-53ed8.firebaseapp.com",
    projectId: "facebook-messenger-clone-53ed8",
    storageBucket: "facebook-messenger-clone-53ed8.appspot.com",
    messagingSenderId: "237594767509",
    appId: "1:237594767509:web:c7224e603d59e0b96c6b9c",
    measurementId: "G-6MV7BQ8PER"
  }
  );
  export {db};


 
const db=firebaseApp.firestore();



export default db;
  