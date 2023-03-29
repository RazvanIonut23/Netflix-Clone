import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../App";
import { auth, provider } from "../firebase";
import HomeScreen from "./HomeScreen";
import s from "./SignUpScreen.module.css";

const SignUpScreen = () => {
  const { user, setUser } = useContext(context);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    });
  };

  // const handleClickFacebook = () => {
  //   signInWithPopup(auth, providerF).then((data) => {
  //     setUser(data.user);
  //     localStorage.setItem("email", data.user.email);
  //     navigate("/home");
  //   });
  // };

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user);
  //       localStorage.setItem("email", user.email);
  //       navigate("home");
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  return user ? (
    <HomeScreen />
  ) : (
    <div className={s.signUpScreen}>
      <form>
        <h1>Sign In</h1>
        <>
          <button type="submit" onClick={handleClick}>
            Sign In with google
          </button>
          {/* <button type="submit" onClick={handleClickFacebook}>
            Sign In with faceBook
          </button> */}
        </>
      </form>
    </div>
  );
};

export default SignUpScreen;
