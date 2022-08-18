import React from "react";
import "./layout.less";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    console.log("You selected:" + event.target.value);
  }

  render() {
    return (<header>
      <div>
        <h1>ui-kit</h1>
      </div>
      <div className="animals">
        <select onChange={this.onChange}>
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    </header>)
  }
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<nav>
      <ul>
        <li><a title="BaiDu Map" onClick={() => this.props.onClick("https://map.baidu.com/")}>BaiDu Map</a></li>
        <li><a title="Stock" onClick={() => this.props.onClick("http://q.10jqka.com.cn/")}>Stock</a></li>
        <li><a title="Weather radar" onClick={() => this.props.onClick("http://www.weather.com.cn/radar/")}>Weather
          radar</a></li>
      </ul>
    </nav>);
  }

}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<main>
      <iframe src={this.props.source} scrolling="no"></iframe>
    </main>);
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<footer></footer>)
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
      <Header></Header>
      <SideBar onClick={(source) => this.handleClick(source)}></SideBar>
      <Content source={this.state.source}></Content>
    </div>);
  }


  handleClick(source) {
    this.setState({ source: source });
  }
}


export { Header, SideBar, Content };

export default Layout;
