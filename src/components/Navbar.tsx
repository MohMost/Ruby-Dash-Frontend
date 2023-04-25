import classes from "../assets/styles/Navbar.module.css";
import { Link, Navigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useState, useEffect, useContext } from "react";
import Modal from "./Modal";
import { UserContext } from "./UserContext";
export default function Navbar() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const { userInfo, setUserInfo }: any = useContext(UserContext);
  const [userPicture, setUserPicture] = useState("");
  const userName = userInfo?.userName;

  useEffect(() => {
    fetch("http://localhost:3001/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setUserPicture(userInfo?.profilePicture);
      });
    });
  }, []);
  function showModalHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function logout() {
    fetch("http://localhost:3001/logout", {
      credentials: "include",
      method: "POST",
    });

    setUserInfo(null);
  }

  return (
    <nav className={classes.navbar_container}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/svgs/waves.svg" alt="" />
      </div>
      <div className={classes.navbar}>
        <Link to="/">
          <div className={classes.logo}>
            <a href="">
              <img src="/svgs/logo.svg" alt="logo" />
            </a>
          </div>
        </Link>
        <div className={classes.links}>
          <ul className={classes.links_ul}>
            <div className={classes.pages}>
              <Link to="/">
                <li className={classes.links_li}>
                  <a className={classes.links_a}>Home</a>
                </li>
              </Link>
              <Link to="/blogs">
                <li className={classes.links_li}>
                  <a className={classes.links_a} href="#">
                    Blogs
                  </a>
                </li>
              </Link>
              <Link to="/">
                <li className={classes.links_li}>
                  <a className={classes.links_a}>Contact</a>
                </li>
              </Link>
            </div>
            {userName && (
              <img
                onClick={showModalHandler}
                className={classes.icon}
                width="45"
                height="45"
                src={userPicture}
              />
            )}
            {!userName && (
              <div className={classes.log_in_out}>
                <Link to="/login">
                  <li className={classes.links_li}>
                    <a className={classes.log_in} href="#">
                      Login
                    </a>
                  </li>
                </Link>
                <Link to="signup">
                  <li className={classes.links_li}>
                    <a className={classes.sign_up} href="#">
                      Sign up
                    </a>
                  </li>
                </Link>
              </div>
            )}
          </ul>
        </div>

        <div className={classes.menu}>
          <img src="/svgs/menu.svg" alt="" />
        </div>
      </div>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <ProfileMenu onLogout={logout} onUserName={userName} />
        </Modal>
      )}
    </nav>
  );
}
