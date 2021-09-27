import { Component, Fragment } from "react";

class Stat extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        count: ++prevState.count,
      };
    });
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
    this.handleIncrement();
  }

  render() {
    return (
      <Fragment>
        <div className="text">Значение счётчика было увеличино</div>
        <div className="text">{this.state.count}</div>
      </Fragment>
    );
  }
}

export default Stat;
