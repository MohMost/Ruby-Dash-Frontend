import classes from "./Categories.module.css";
export default function Categories() {
  return (
    <section className={classes.section_category}>
      <div className={classes.categories}>
        <h2 className={classes.categories_h2}>Categories :</h2>
        <ul className={classes.category_list}>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Technology
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Health and Fitness
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Travel
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Food and Recipes
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Fashion and Beauty
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Personal Finance
            </a>
          </li>
          <li className={classes.category}>
            <a className={classes.category_a} href="#">
              Arts and Culture
            </a>
          </li>
        </ul>
      </div>
      <svg
        width="100%"
        height="17"
        viewBox="0 0 1279 17"
        fill="#42240C"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.995318"
          y1="16"
          x2="3000.96"
          y2="1.95522"
          stroke="#42240C"
          stroke-opacity="0.5"
          stroke-width="2"
        ></line>
      </svg>
    </section>
  );
}
