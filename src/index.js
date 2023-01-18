import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import Navbar from "./components/Navbar";

import "./styles.css";

function App() {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <div className="App">
      <Navbar visible={visible} />
      <div className="container">
        {[1, 2, 3, 4, 5].map(val => {
          return (
            <div key={val} className={"placeholder"}>
              <p>{val}</p>
            </div>
          );
        })}
      </div>
      <div className={classNames("info")}>
        <p>{yOffset}</p>
        <p>{visible ? "visible" : "not visible"}</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
