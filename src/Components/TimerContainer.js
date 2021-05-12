import React, { Component } from "react";
import ChangeTime from "./ChangeTime";
import Timer from "./Timer";

class TimerContainer extends Component {
  render() {
    const { action, workminute, worksecond, breakminute, breaksecond, playwork, playbreak } = this.props.state;
    const { play, reset, setTime } = this.props;
    if (action === "work") {
      return (
        <div>
          <Timer playing={playwork} action={action} minute={workminute} second = {worksecond} play={play} reset={reset} />
        </div>
      );
    } else if (action === "break") {
      return (
        <div>
          <Timer playing={playbreak} action={action} minute={breakminute} second = {breaksecond} play={play} reset={reset} />
        </div>
      );
    } else {
      return <ChangeTime setTime = {setTime} />;
    }
  }
}

export default TimerContainer;
