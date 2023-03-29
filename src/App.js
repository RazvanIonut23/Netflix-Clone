import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import ProfileScreen from "./screens/ProfileScreen";
import Movie from "./Movie";

export const context = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    user: user,
    setUser: setUser,
    signIn: signIn,
    setSignIn: setSignIn,
  };

  return (
    <context.Provider value={value}>
      <div className="App">
        <Routes basename="/netflix-clone">
          <Route path="/" element={<LoginScreen />} />
          {user ? (
            <>
              <Route path="home" element={<HomeScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="movie/:id" element={<Movie />} />
            </>
          ) : (
            <Route path="/" element={<LoginScreen />} />
          )}
        </Routes>
      </div>
    </context.Provider>
  );
}

export default App;
