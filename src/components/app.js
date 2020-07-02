import React, { Component } from "react";
import moment from "moment";

import PortfolioContainer from "./portfolioContainer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Thomas DiGregorios Portfolio</h1>
        <PortfolioContainer />
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      </div>
    );
  }
}
