const firebaseConfig = {
  apiKey: "AIzaSyDORhP6u_7alaVvkdy2AxnVYZQsLQDEBOU",
  authDomain: "listeningclassapp.firebaseapp.com",
  projectId: "listeningclassapp",
  storageBucket: "listeningclassapp.firebasestorage.app",
  messagingSenderId: "413832094784",
  appId: "1:413832094784:web:9048abe82d7243104a6ba5"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
