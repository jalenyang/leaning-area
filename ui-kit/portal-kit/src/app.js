import React, { Component } from "react";
import { Skeleton, Button } from "antd";

class App extends Component {
  render() {
    return (
      <div>
        <Skeleton></Skeleton>
        <Button type="primary">More Button</Button>
      </div>
    );
  }
}

export default App;
