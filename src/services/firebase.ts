import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDDAYL1p1IUMCU-7voBAOWhsJ8Lli0Mw3M',
  authDomain: 'diabetecontrol-79b85.firebaseapp.com',
  databaseURL: 'https://diabetecontrol-79b85-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'diabetecontrol-79b85',
  storageBucket: 'diabetecontrol-79b85.appspot.com',
  messagingSenderId: '452403721398',
  appId: '1:452403721398:web:44720074e7a6fe6e7be217',
}

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
