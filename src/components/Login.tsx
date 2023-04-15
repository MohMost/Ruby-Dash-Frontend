import React from "react";
import classes from "./Login.module.css";
export default function Login() {
  return (
    <div className={classes.container}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/waves.svg" alt="" />
      </div>
      <div className={classes.login_window}>
        <form className={classes.form} action="">
          <div className={classes.title_container}>
            <h2 className={classes.title}>Login</h2>
            <div className={classes.line}></div>
            <p className={classes.welcome}>
              welcome back! good to see you again
            </p>
          </div>

          <input
            className={classes.input}
            type="text"
            placeholder="Username or Email"
          />
          <input className={classes.input} type="text" placeholder="Password" />
          <div className={classes.buttons}>
            <button className={classes.continue_button}>
              <img src="/ic_baseline-arrow-circle-right.svg" />
              <p>CONTINUE</p>
            </button>
            <p className={classes.or}>OR</p>
            <button className={classes.google_button}>
              <img src="/ph_google-logo-fill.svg" />
              <p>Login with google</p>
            </button>
          </div>
        </form>
        <img className={classes.image} src="/login.png" alt="" />
      </div>
      <div className={classes.navbar_bg_bottom}>
        <img className={classes.bottom_svg} src="/wave_bottom.svg" alt="" />
        <div className={classes.filler_div_bottom}></div>
      </div>
    </div>
  );
}
