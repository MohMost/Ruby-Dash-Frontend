import { useState } from "react";
import classes from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <a href="">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
      <div className={classes.links}>
        <ul className={classes.links_ul}>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#">
              Home
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#">
              Blogs
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.links_a} href="#">
              Contact
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.log_in} href="#">
              Login
            </a>
          </li>
          <li className={classes.links_li}>
            <a className={classes.sign_up} href="#">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
