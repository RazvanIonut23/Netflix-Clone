import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import ProfileScreen from "./screens/ProfileScreen";
import Movie from "./Movie";

export const context = createContext(null);

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const value = {
    isLogin: isLogin,
    setIsLogin: setIsLogin,
  };

  return (
    <context.Provider value={value}>
      <div className="App">
        <Routes>
          {isLogin === true && (
            <Route path="/home" exact element={<HomeScreen />} />
          )}
          {isLogin === true && (
            <Route exact path="/profile" element={<ProfileScreen />} />
          )}
          {isLogin === true && (
            <Route exact path="movie/:id" element={<Movie />} />
          )}

          {isLogin === false && (
            <Route exact path="/" element={<LoginScreen />} />
          )}
        </Routes>
      </div>
    </context.Provider>
  );
}

export default App;
