import React, { Component } from "react";
import Header from "./Components/Header";
import TimerContainer from "./Components/TimerContainer";
import "./App.css";
import Settings from "./Components/Settings";
class App extends Component {
  state = {
    action: "work",
    worktime: 25,
    breaktime: 5,
    playwork: true,
    playbreak: true,
    workminute: 25,
    worksecond: 0,
    breakminute: 5,
    breaksecond: 0,
  };

  play = (e) => {
    if (e.target.value === "work") {
      let seconds = this.state.workminute * 60 + this.state.worksecond;
      this.worktimer = setInterval(() => {
        if (seconds !== 0) {
          seconds = seconds - 1;
          let worksecond = seconds % 60;
          let workminute = Math.floor(seconds / 60);
          this.setState({
            playwork: false,
            worksecond,
            workminute,
          });
        }
      }, 1000);
    } else {
      this.breaktimer = setInterval(() => {
        let seconds = this.state.breakminute * 60 + this.state.breaksecond;
        if (seconds !== 0) {
          seconds = seconds - 1;
          let breaksecond = seconds % 60;
          let breakminute = Math.floor(seconds / 60);
          this.setState({
            playbreak: false,
            breaksecond,
            breakminute,
          });
        }
      }, 1000);
    }
  };

  reset = (e) => {
    if (e.target.value === "work") {
      clearInterval(this.worktimer);
      this.setState({
        workminute: this.state.worktime,
        worksecond: 0,
        playwork: true,
      });
    } else {
      clearInterval(this.breaktimer);
      this.setState({
        breakminute: this.state.breaktime,
        breaksecond: 0,
        playbreak: true,
      });
    }
  };

  setTime = (x, y) => {
    this.setState({
      worktime: x,
      breaktime: y,
      workminute: x,
      breakminute: y,
      worksecond: 0,
      breaksecond: 0,
      action: "work",
      playwork: true,
      playbreak: true,
    });
    clearInterval(this.worktimer);
    clearInterval(this.breaktimer);
  };

  setAction = (e) => {
    if (e.target.value === "work") {
      this.setState({
        action: "work",
      });
    }
    if (e.target.value === "break") {
      this.setState({
        action: "break",
      });
    }
    if (e.target.value === "setting") {
      this.setState({
        action: "setting",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header text-5xl my-5">POMODORO TECHNIQUE</div>
        <Header state={this.state} setAction={this.setAction} />
        <Settings setAction={this.setAction} />
        <TimerContainer
          state={this.state}
          setTime={this.setTime}
          play={this.play}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
