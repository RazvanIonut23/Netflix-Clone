import React, { useState } from "react";
import s from "./LoginScreen.module.css";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={s.loginScreen}>
      <div className={s.loginScreenBackground}>
        <img
          className={s.loginScreenLogo}
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
          alt=""
        />
        <button className={s.loginScreenButton} onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className={s.loginScreenGradient} />
      </div>
      <div className={s.loginScreenBody}>
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Whatch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className={s.loginScreenInput}>
              <form>
                <input type="email" placeholder="Email Adress" />
                <button
                  className={s.LoginScreenGetStarted}
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
