import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import "./styles.css";
import Main from "./components/main";

export default class App extends Component {
  render() {
    return (
      <>
        <nav className="navHeader">
          <button className="buttonNavMobile">
            <FaBars className="iconNav" />
          </button>
          <h2>Portflow</h2>
        </nav>

        <Main />
      </>
    );
  }
}
