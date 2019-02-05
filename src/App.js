import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [{ react: 0 }, { angular: 0 }, { vue: 0 }, { ember: 0 }]
    };
  }
  handleIncrement(index, argu) {
    let value = this.state.count;
    if (argu == "react") {
      value[index].react = value[index].react + 1;
    }
    if (argu == "angular") {
      value[index].angular = value[index].angular + 1;
    }
    if (argu == "vue") {
      value[index].vue = value[index].vue + 1;
    }
    if (argu == "ember") {
      value[index].ember = value[index].ember + 1;
    }
    return value;
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="flex-container">
          <div className="rectangle">
            <div className="count-div">{this.state.count[0].react}</div>
            <h2 className="language">React</h2>
            <button
              className="btn"
              onClick={() =>
                this.setState({
                  count: this.handleIncrement(0, "react")
                })
              }
            >
              <i className="fa fa-plus-circle" />
            </button>
          </div>
        </div>
        <div className="flex-container">
          <div className="rectangle">
            <div className="count-div">{this.state.count[1].angular}</div>
            <h2 className="language">Angular</h2>
            <button
              className="btn"
              onClick={() =>
                this.setState({ count: this.handleIncrement(1, "angular") })
              }
            >
              <i className="fa fa-plus-circle" />
            </button>
          </div>
        </div>
        <div className="flex-container">
          <div className="rectangle">
            <div className="count-div">{this.state.count[2].vue}</div>
            <h2 className="language">Vue</h2>
            <button
              className="btn"
              onClick={() =>
                this.setState({ count: this.handleIncrement(2, "vue") })
              }
            >
              <i className="fa fa-plus-circle" />
            </button>
          </div>
        </div>
        <div className="flex-container">
          <div className="rectangle">
            <div className="count-div">{this.state.count[3].ember}</div>
            <h2 className="language">Ember</h2>
            <button
              className="btn"
              onClick={() =>
                this.setState({ count: this.handleIncrement(3, "ember") })
              }
            >
              <i className="fa fa-plus-circle" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
