import { useContext, useState, useEffect } from "react";
import classes from "../../assets/styles/Login.module.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../components/UserContext";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo }: any = useContext(UserContext);
  useEffect(() => {
    if (redirect) {
      window.location.reload();
    }
  }, [redirect]);
  async function login(e: any) {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
        profilePicture,
      }),
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }
  if (redirect) {
    return <Navigate to={"/blogs"} />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/svgs/waves.svg" alt="" />
      </div>
      <div className={classes.login_window}>
        <form className={classes.form} onSubmit={login}>
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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className={classes.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.buttons}>
            <button className={classes.continue_button}>
              <img src="/svgs/ic_baseline-arrow-circle-right.svg" />
              <p>CONTINUE</p>
            </button>
            <p className={classes.or}>OR</p>
            <button className={classes.google_button}>
              <img src="/svgs/ph_google-logo-fill.svg" />
              <p>Login with google</p>
            </button>
          </div>
        </form>
        <img className={classes.image} src="/images/login.png" alt="" />
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
