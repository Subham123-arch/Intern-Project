// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/init'; // <--- Adjust this path to your firebase init file

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth methods
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    // This observer listens for auth state changes (login, logout, initial load)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Once we know the auth state, stop loading
    });

    return unsubscribe; // Clean up the listener when the component unmounts
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading, // Export loading state for conditional rendering
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children when auth state is known */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};