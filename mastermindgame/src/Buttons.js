import React from "react";

export default function Buttons({ handleColorClick }) {
  return (
    <div className="coloredButton">
      <button
        className="buttons"
        style={{ background: "blue" }}
        onClick={() => handleColorClick("0")}
      ></button>
      <button
        className="buttons"
        style={{ background: "green" }}
        onClick={() => handleColorClick("1")}
      ></button>
      <button
        className="buttons"
        style={{ background: "yellow" }}
        onClick={() => handleColorClick("2")}
      ></button>
      <button
        className="buttons"
        style={{ background: "red" }}
        onClick={() => handleColorClick("3")}
      ></button>
      <button
        className="buttons"
        style={{ background: "black" }}
        onClick={() => handleColorClick("4")}
      ></button>
      <button
        className="buttons"
        style={{ background: "orange" }}
        onClick={() => handleColorClick("5")}
      ></button>
      <button
        className="buttons"
        style={{ background: "purple" }}
        onClick={() => handleColorClick("6")}
      ></button>
      <button
        className="buttons"
        style={{ background: "brown" }}
        onClick={() => handleColorClick("7")}
      ></button>
    </div>
  );
}
