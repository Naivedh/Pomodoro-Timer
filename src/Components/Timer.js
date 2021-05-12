import React from "react";

function Timer(props) {
  return (
    <div className="text-center">
      <div className="text-6xl my-6" style={{ letterSpacing: "3px" }}>
        {props.minute}:{props.second}
      </div>

      <div className="timer-button">
        <button
        disabled={!props.playing}
          value={props.action}
          className="rounded-full m-2 px-6 py-2"
          onClick={(e) => props.play(e)}
        >
          Play
        </button>
        <button
          value={props.action}
          className="rounded-full m-2 px-6 py-2"
          onClick={(e) => props.reset(e)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
