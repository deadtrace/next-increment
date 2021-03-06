import { Component, Fragment } from "react";

class Home extends Component {
  state = {
    count: 0,
  };

  componentDidUpdate() {
    localStorage.setItem("_increment", JSON.stringify(this.state));
  }

  componentDidMount() {
    const data = localStorage.getItem("_increment");
    if (data) {
      this.setState((prevState) => {
        return JSON.parse(data);
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="text">Счётчик</div>
        <div className="text">{this.state.count}</div>
      </Fragment>
    );
  }
}

export default Home;
