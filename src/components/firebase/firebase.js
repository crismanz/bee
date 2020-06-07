import firebase from 'firebase'

const config = {
  // apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  // authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  // storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  // databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  // projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  // messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID

  apiKey: "AIzaSyA238nc-rNd_WZebPiiEpQPFkO46lF6v78",
  authDomain: "bees-8423e.firebaseapp.com",
  databaseURL: "https://bees-8423e.firebaseio.com",
  projectId: "bees-8423e",
  storageBucket: "bees-8423e.appspot.com",
  messagingSenderId: "1026583371009",
  appId: "1:1026583371009:web:ef35e473e9446f489f0f00",
  measurementId: "G-6CPJ7TSD68"
}

firebase.initializeApp(config)

const auth = firebase.auth()
const currentUser = auth.currentUser

export { auth, currentUser }