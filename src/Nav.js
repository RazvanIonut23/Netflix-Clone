import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`${s.nav} ${show && s.navBlack}`}>
      <div className={s.navContents}>
        <Link to="/">
          <img
            className={s.navLogo}
            src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
            alt=""
          />
        </Link>

        <Link to="/profile">
          <img
            className={s.navAvatar}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAflBMVEXRUhn////PSQDRURbPRgDOQwDQTAjQTxHNPQD35+PgkXTOQADQTQ3029LMMAD//fzjnITVXyj67+vejXfnr5r99/TuxbnMNwDrvKzhlXzy08jmqpfTXi7dhGTwzMHXbUfptaTSVyLZdlHko47WZjjbflrXbU7UXzbeim/WaD/golfMAAAEdElEQVRoge2a3WKyMAyGsS0UBJQxQZB/mdPd/w1+IH8lFJyf2J30OVTgJWmalqSK0kKxt/kf9sYpiMLLl/IKGNnPK7un6BxTVGHhl9SR87TNQRIjYtHXdBvTC+M57SDRTI2+LnwHJc9ou4dKegWbO9TgCe2SkBWlK0gKXTsr7itoXe3Kdn8sYeRzht/UtUZ7AN1GGrl14ovbX2R17SrmFWa6nzL9zPd8iqw3iCuKFbdTzvO/daryHe8f1x7xXl6JbNtOwyupzFO5s/+0ergNUEI0RFAdU/SHl/ON+D1uh2gJb9gTJERcQSVHPH9HtPMgEWfQ1fcN+kN1Y7Ul5SFo+1cRV0MzEPN2rAkTVxRzvOgEmjjLK2jBJF73oosKuE5eCdopb4dIpNdbeZQ5wSkPz/iN6XVRX9XVVzerEolEIpFIJBKJRCKRrAxGLONCxZMfsRTXUKtiXGcaSbClPxw7DZ93zqw8LsgdddewVDJE1XUfDeeKjJUn1eOjw53A93PmMfRnXKA6Mn99g+qVMy9vgrK6gQe/0WL8l86+tDv6jylXwIbNPpmvo8Ayn3cdjAc9r1xl7tPHb10O9sGGjRvPx8GkvHvrnwPbfSHrQVCYdXH30rQYe2VzUpVZ8Ae8uC/tgt6HNwoJ6zJ+a5+0/x5hm+C2FHUm6O5snHZ4VVByN0Y9RIxBOyCNdaRpKoHibrxUrtUu4PJNRExCTDUEtc987MGpjL/9/DwAT242wWKNntPRdP0oCia/fo9TipXNN+BYsv42bKF6eqNROe+X3Vwb1uEQbAdyOXWmY0KzMMr9vEwKMhiC6cRbPLbQg9r5N7d1phMt773p+ZnZm8LtakCMafkTdiN5pE0IU6jh4958/RfGX6bBQ4uHI+81AU+LySi5ff1euzx8TGpOxOtl4NFtYZM8COeUgvvVyc80EplLP7iTljzogrezzeReZhftM7G1HL97jt/v96GZ1m9D2sQKjWferUsgVFk8xvA5l6rpUuT5bWDPvmK/+Fna/AGSfTK/TmDEacQ15K04VoLUHjB63CGY5q0wfpZyJSYJ123GbZiiFqLMJqylKGJmMcco5E08Ly8eNFmQUk5u9A7x6JVpsgWEMcWjDELiA2wke0H2uJ2JCUl89k7bweCwAwonZk2yF1U1h4mQfepY5u/aapq6Q0mUB0FwKLOjzsmLUJ636mOk76xLWUalczZ35jPNJaxxd9cdYC0L5gK5fgyZe8j/o5ZMQg2EN83MfnK4obDe+ICmhifXNdJQ5wSGANSjruqVtm8LOhLBYm3DLL6e6/SwuNF9C/UO0nPde/DZC5v896Cxn1gLn1fvYbSSpPrjG9YEbN0Fhz349grFxh3ItalYdfDB6GKhrtfBLuQq7DCQUi9eYA8iNOFgBagfRJ0Bu6tjoB6IVFdM4y/V4QeTWHUa313fp5xIqLpiXYNK3+mGPxN6Dqz+io8v5y7lGWscZH8ObFm4LTdNaiGC0KuPJjfkFQSEgI674x9ZLpFIJBKJRCKRSP6Qf6W3Pca50WqtAAAAAElFTkSuQmCC"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
