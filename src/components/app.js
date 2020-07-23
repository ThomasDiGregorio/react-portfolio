import React, { Component } from "react";
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolioContainer";
import NavigationContainer from "./navigation/navigationContainer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavigationContainer />
        <h1>Thomas DiGregorios Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
