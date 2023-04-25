import classes from "../assets/styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.wave_container}>
        <img
          className={classes.wave_footer}
          src="/svgs/wave_bottom_footer.svg"
          alt=""
        />
      </div>
      <div className={classes.footer_filler}></div>
    </footer>
  );
}
