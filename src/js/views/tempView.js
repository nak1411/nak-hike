import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  handleAdd: PropTypes.func,
  num: PropTypes.number
};

export default class tempView extends Component {
  render() {
    const { num, handleAdd } = this.props;

    return (
      <div>
        <h1 onClick={handleAdd}>{num}</h1>
        <p>Testing text right here.</p>
      </div>
    );
  }
}

tempView.propTypes = propTypes;
