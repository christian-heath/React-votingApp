import React, { Component } from "react";
import "./Counter.css";
const Counter = props => {
  const display = "inline-block";
  let count = 5;
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <div className="flex-container">
      <div className="rectangle">
        <div className="count-div">{count}</div>
        <h2 className="language">React</h2>
        <button className="btn" onClick={handleClick}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>
      <div className="rectangle">
        <div className="count-div">{count}</div>
        <h2 className="language">Angular</h2>
        <button className="btn" onClick={handleClick}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>
      <div className="rectangle">
        <div className="count-div">{count}</div>
        <h2 className="language">Vue</h2>
        <button className="btn" onClick={handleClick}>
          <i className="fa fa-plus-circle" />
        </button>
      </div>
      <div className="rectangle">
        <div className="count-div">{count}</div>
        <h2 className="language">Ember</h2>
        <button className="btn">
          <i className="fa fa-plus-circle" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
