import Categories from "./Categories";
import BlogList from "./BlogList";
import classes from "./Blog.module.css";
export default function Blogs() {
  return (
    <main className={classes.container}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/waves.svg" alt="" />
      </div>
      <Categories />
      <BlogList />
    </main>
  );
}
