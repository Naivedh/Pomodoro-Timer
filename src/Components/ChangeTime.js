import React, { Component } from "react";

class ChangeTime extends Component {
  state = {
    work: 0,
    break: 0,
  };

  onChangeWork = (e) => {
    this.setState({
      work: e.target.value,
    });
  };

  onChangeBreak = (e) => {
    this.setState({
      break: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setTime(this.state.work, this.state.break);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="text-center">
        <div className="setting flex items-center justify-between">
          <div>
            <input
              className="rounded-full mt-4 mb-2 mx-4 py-2"
              value={this.state.work}
              onChange={(e) => this.onChangeWork(e)}
              type="text"
            />
            <h1 className="text-xl">Work</h1>
          </div>
          <div>
            <input
              className="rounded-full mt-4 mb-2 mx-4 py-2"
              value={this.state.break}
              onChange={(e) => this.onChangeBreak(e)}
              type="text"
            />
            <h1 className="text-xl">Break</h1>
          </div>
        </div>
        <button
          className="setting-button rounded-full m-6 px-6 py-2"
          type="submit"
        >
          Done
        </button>
      </form>
    );
  }
}

export default ChangeTime;
