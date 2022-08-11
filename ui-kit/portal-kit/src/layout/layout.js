import React from "react";
import "./layout.less";

class SideBar extends React.Component {
  render() {
    return (<div className="sidebar">SideBar</div>);
  }
}

class Content extends React.Component {
  render() {
    return (<div className="content">Content</div>);
  }
}

class Layout extends React.Component {
  render() {
    return (<div className="layout">
      <SideBar></SideBar>
      <Content></Content>
    </div>);
  }
}


export { SideBar, Content };

export default Layout;
