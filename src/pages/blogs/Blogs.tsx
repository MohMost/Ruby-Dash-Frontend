import Categories from "./Categories";
import BlogList from "./BlogList";
import classes from "../../assets/styles/Blog.module.css";
import SearchBar from "../../components/SearchBar";
export default function Blogs() {
  return (
    <main className={classes.container}>
      <div className={classes.navbar_bg_top}>
        <div className={classes.filler_div}></div>
        <img className={classes.top_svg} src="/svgs/waves.svg" alt="" />
      </div>
      <SearchBar />
      <Categories />

      <BlogList />
    </main>
  );
}
