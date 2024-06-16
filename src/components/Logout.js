import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
