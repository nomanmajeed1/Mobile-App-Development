import React, { Component } from "react";

class News extends Component {
  render() {
    return (
      <div>
        <h1>hello {this.props.name}</h1>
      </div>
    );
  }
}

export default News;
