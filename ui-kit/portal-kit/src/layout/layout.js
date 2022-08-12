import React from "react";
import "./layout.less";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="sidebar">
      <ul>
        <li><a title="BaiDu Map" onClick={() => this.props.onClick("https://map.baidu.com/")}>BaiDu Map</a></li>
        <li><a title="Stock" onClick={() => this.props.onClick("http://q.10jqka.com.cn/")}>Stock</a></li>
        <li><a title="Weather radar" onClick={() => this.props.onClick("http://www.weather.com.cn/radar/")}>Weather
          radar</a></li>
      </ul>
    </div>);
  }

}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="content">
      <iframe src={this.props.source} width="100%" height="100%"></iframe>
    </div>);
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "https://map.baidu.com/"
    };
  }

  render() {
    return (<div className="layout">
      <SideBar onClick={(source) => this.handleClick(source)}></SideBar>
      <Content source={this.state.source}></Content>
    </div>);
  }


  handleClick(source) {
    this.setState({ source: source });
  }
}


export { SideBar, Content };

export default Layout;
