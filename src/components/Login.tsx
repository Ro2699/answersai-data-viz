import { useState } from 'react';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔐 Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Logged in with Google!');
    } catch (err: any) {
      alert(` ${err.message}`);
    }
  };

  // 📧 Email/Password Login
  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in with email!');
    } catch (err: any) {
      alert(`${err.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-[#1a1a1a] border border-[#333] rounded-lg text-white space-y-6">
      <h2 className="text-xl font-bold">Login</h2>

      {/* Google Sign-In */}
      <button
        onClick={handleGoogleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 transition rounded px-4 py-2"
      >
        Sign in with Google
      </button>

      {/* Divider */}
      <div className="text-center text-gray-400 text-sm">or</div>

      {/* Email/Password Login */}
      <div className="space-y-3">
        <input
          className="w-full bg-[#2a2a2a] border border-[#444] rounded p-2 text-white placeholder-gray-400"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full bg-[#2a2a2a] border border-[#444] rounded p-2 text-white placeholder-gray-400"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleEmailLogin}
          className="w-full bg-green-600 hover:bg-green-700 transition rounded px-4 py-2"
        >
          Sign in with Email
        </button>
      </div>
    </div>
  );
};

export default Login;
