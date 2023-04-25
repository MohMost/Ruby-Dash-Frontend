import classes from "../assets/styles/SearchBar.module.css";
export default function SearchBar() {
  return (
    <form className={classes.container}>
      <input className={classes.searchbar} type="text" placeholder="Search" />
      <button className={classes.icon}>Go</button>
    </form>
  );
}
