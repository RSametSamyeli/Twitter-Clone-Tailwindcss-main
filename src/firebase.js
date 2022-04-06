import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyA6Ps0NzxmHpedyElR7ah44w3mRPivJPD0',
  authDomain: 'twitter-clone-tailwindcss.firebaseapp.com',
  projectId: 'twitter-clone-tailwindcss',
  storageBucket: 'twitter-clone-tailwindcss.appspot.com',
  messagingSenderId: '610100554353',
  appId: '1:610100554353:web:c205fe51cc208b014209d0',
  measurementId: 'G-HVVKL9HZN5',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const db = firebase.firestore()
export default db
