import React from "react";
import Products from "../Components/Products";
import Sidebar from "./Sidebar";
import Search from "./Search";
import "./Styles/Home.css";
function Home() {
  return (

    <div className="Home">
      <Search />
      <div className="Home-item">
        <div className="side-bar">
        <Sidebar />
        </div>
        <div className="product">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Home;
