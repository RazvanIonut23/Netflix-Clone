import React, { useContext, useEffect, useState } from "react";
import { auth, provider, providerF } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import s from "./SignUpScreen.module.css";
import HomeScreen from "./HomeScreen";
import { useNavigate } from "react-router-dom";
import { context } from "../App";

const SignUpScreen = () => {
  const consumer = useContext(context);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      consumer.setIsLogin(true);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    });
  };

  const handleClickFacebook = () => {
    signInWithPopup(auth, providerF).then((data) => {
      consumer.setIsLogin(true);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    });
  };

  // useEffect(() => {
  //   consumer.setIsLogin(localStorage.getItem("email"));
  // }, []);

  return (
    <div className={s.signUpScreen}>
      <form>
        <h1>Sign In</h1>
        <>
          <button type="submit" onClick={handleClick}>
            Sign In with google
          </button>
          <button type="submit" onClick={handleClickFacebook}>
            Sign In with faceBook
          </button>
        </>
      </form>
    </div>
  );
};

export default SignUpScreen;
