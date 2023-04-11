import { useState } from "react";

import "./App.css";
import BlogList from "./components/BlogList";
import Categories from "./components/Categories";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Categories />
        <BlogList />
      </main>
    </>
  );
}

export default App;
