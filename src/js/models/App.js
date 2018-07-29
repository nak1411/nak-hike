import React, { Component } from "react";
import TempView from "../views/tempView";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({
      num: this.state.num + 1
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <TempView num={this.state.num} handleAdd={this.handleAdd} />
      </div>
    );
  }
}
