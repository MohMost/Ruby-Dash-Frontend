import React, { useState } from "react";
import classes from "../../assets/styles/SignUp.module.css";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function signupHandler(e: any) {
    e.preventDefault();
    const userName = email.split("@")[0];
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        email,
        password,
      }),
    });
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/svgs/waves.svg" alt="" />
      </div>
      <div className={classes.login_window}>
        <form className={classes.form} onSubmit={signupHandler}>
          <div className={classes.title_container}>
            <h2 className={classes.title}>Sign Up</h2>
            <div className={classes.line}></div>
            <p className={classes.welcome}>
              Sign up today and start sharing your unique voice with the world!
            </p>
          </div>
          <input
            className={classes.input}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className={classes.input}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            className={classes.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={classes.input}
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.buttons}>
            <button className={classes.continue_button}>
              <img src="/svgs/ic_baseline-arrow-circle-right.svg" />
              <p>Sign Up</p>
            </button>
            <p className={classes.or}>OR</p>
            <button className={classes.google_button}>
              <img src="/svgs/ph_google-logo-fill.svg" />
              <p>Sign up with google</p>
            </button>
          </div>
        </form>
        <img className={classes.image} src="/images/signup.png" alt="" />
      </div>
      <div className={classes.navbar_bg_bottom}>
        <img
          className={classes.bottom_svg}
          src="/svgs/wave_bottom.svg"
          alt=""
        />
        <div className={classes.filler_div_bottom}></div>
      </div>
    </div>
  );
}
