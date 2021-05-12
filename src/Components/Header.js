import React from "react";

function Header(props) {
  return (
    <div className="select-section rounded-full my-4 p-1">
      <div className="flex flex-wrap">
        <button
          className={
            "rounded-full m-2 py-2 px-8 " +
            (props.state.action === "work" ? "button-color" : "")
          }
          value="work"
          onClick={(e) => props.setAction(e)}
        >
          WORK
        </button>
        <button
          className={
            "rounded-full m-2 py-2 px-8 " +
            (props.state.action === "break" ? "button-color" : "")
          }
          value="break"
          onClick={(e) => props.setAction(e)}
        >
          BREAK
        </button>
      </div>
    </div>
  );
}

export default Header;
