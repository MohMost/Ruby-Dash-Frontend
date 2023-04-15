import React from "react";
import classes from "./MainContent.module.css";
export default function MainContent() {
  return (
    <div className={classes.main_container}>
      <section className={classes.section}>
        <div className={classes.text_container}>
          <h2 className={classes.title2}>Lorem, ipsum dolor</h2>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo at,
            eveniet ut enim non explicabo numquam minima quaerat culpa provident
            nostrum unde, adipisci corporis alias voluptates rerum animi ea
            veritatis?
          </p>
        </div>
        <div className={classes.image_container}>
          <h2 className={classes.title}>Lorem, ipsum dolor</h2>
          <img className={classes.image} src="/picture1.jpg" alt="" />
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.image_container}>
          <h2 className={classes.title}>Lorem, ipsum dolor</h2>
          <img src="/picture2.jpg" alt="" />
        </div>

        <div className={classes.text_container}>
          <h2 className={classes.title2}>Lorem, ipsum dolor</h2>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo at,
            eveniet ut enim non explicabo numquam minima quaerat culpa provident
            nostrum unde, adipisci corporis alias voluptates rerum animi ea
            veritatis?
          </p>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.text_container}>
          <h2 className={classes.title2}>Lorem, ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo at,
            eveniet ut enim non explicabo numquam minima quaerat culpa provident
            nostrum unde, adipisci corporis alias voluptates rerum animi ea
            veritatis?
          </p>
        </div>
        <div className={classes.image_container}>
          <h2 className={classes.title}>Lorem, ipsum dolor</h2>
          <img src="/picture3.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}
