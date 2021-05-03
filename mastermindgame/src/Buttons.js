import React from "react";

export default function Buttons({ handleClick }) {
  return (
    <div className="coloredButton">
      <button
        className="buttons"
        style={{ background: "blue" }}
        onClick={() => this.handleClick("0")}
      ></button>
      <button
        className="buttons"
        style={{ background: "green" }}
        onClick={() => this.handleClick("1")}
      ></button>
      <button
        className="buttons"
        style={{ background: "yellow" }}
        onClick={() => this.handleClick("2")}
      ></button>
      <button
        className="buttons"
        style={{ background: "red" }}
        onClick={() => this.handleClick("3")}
      ></button>
      <button
        className="buttons"
        style={{ background: "black" }}
        onClick={() => this.handleClick("4")}
      ></button>
      <button
        className="buttons"
        style={{ background: "orange" }}
        onClick={() => this.handleClick("5")}
      ></button>
      <button
        className="buttons"
        style={{ background: "purple" }}
        onClick={() => this.handleClick("6")}
      ></button>
      <button
        className="buttons"
        style={{ background: "brown" }}
        onClick={() => this.handleClick("7")}
      ></button>
    </div>
  );
}
