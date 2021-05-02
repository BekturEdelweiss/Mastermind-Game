import React from "react";

export default function Buttons({ handleClick }) {
  return (
    <div className="coloredButton">
      <button className="" onClick={() => handleClick("0")}>
        zero
      </button>
      <button className="" onClick={() => handleClick("1")}>
        one
      </button>
      <button className="" onClick={() => handleClick("2")}>
        two
      </button>
      <button className="" onClick={() => handleClick("3")}>
        three
      </button>
      <button className="" onClick={() => handleClick("4")}>
        four
      </button>
      <button className="" onClick={() => handleClick("5")}>
        five
      </button>
      <button className="" onClick={() => handleClick("6")}>
        six
      </button>
      <button className="" onClick={() => handleClick("7")}>
        seven
      </button>
    </div>
  );
}
