import { useState } from "react";
import Navbar from "../../components/Navbar";
import classes from "../../assets/styles/Header.module.css";
export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/svgs/waves.svg" alt="" />
      </div>

      <div className={classes.banner}>
        <div className={classes.hero_container}>
          <h1 className={classes.banner_h1}>
            Dash into insightful perspectives on today's topics
          </h1>
          <a className={classes.btn}>Write your first blog</a>
        </div>

        <img className={classes.image} src="/images/banner.png" alt="artwork" />
      </div>

      <a href="#main" className={classes.arrow_container}>
        <svg
          className={classes.arrow}
          width="50"
          height="32"
          viewBox="0 0 200 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89.9141 123.338C95.4926 129.588 104.552 129.588 110.131 123.338L195.816 27.3375C201.395 21.0875 201.395 10.9375 195.816 4.6875C190.238 -1.5625 181.178 -1.5625 175.6 4.6875L100 89.3875L24.4003 4.7375C18.8218 -1.5125 9.76236 -1.5125 4.18387 4.7375C-1.39462 10.9875 -1.39462 21.1375 4.18387 27.3875L89.8695 123.388L89.9141 123.338Z"
            fill="#42240C"
          />
        </svg>
      </a>
      <div className={classes.navbar_bg_bottom}>
        <img
          className={classes.bottom_svg}
          src="/svgs/wave_bottom.svg"
          alt=""
        />
        <div className={classes.filler_div_bottom}></div>
      </div>
    </header>
  );
}
