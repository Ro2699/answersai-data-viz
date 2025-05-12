import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7gHmyISMlylTwGHoYEBCR23Kl1UUkLlg",
  authDomain: "answersai-data-viz-3f6ce.firebaseapp.com",
  projectId: "answersai-data-viz-3f6ce",
  storageBucket: "answersai-data-viz-3f6ce.firebasestorage.app",
  messagingSenderId: "1054720619237",
  appId: "1:1054720619237:web:823db443c30bf01693da0c",
  measurementId: "G-5QXC86YSDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance (used across the app)
export const auth = getAuth(app);


