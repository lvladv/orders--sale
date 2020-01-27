import React, { Component, createRef } from "react";
import Fold from "./components/fold";

const url = "http://127.0.0.1:8080/api/order";
const filterURL = "?filter=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      order: [],
      filter: ""
    };
  }

  filterVal = createRef();

  async fetchData(filter) {
    let response = await fetch(`${url}${filterURL}${filter}`);
    let order = await response.json();
    this.setOrder(order);
  }

  setOrder = order => {
    this.setState({ order });
  };
  componentDidMount() {
    this.fetchData(this.state.filter);
  }

  getFilter = () => {
    this.setState({ filter: this.filterVal.current.value });
  };

  getEnter = ({ key }) => {
    if (key === "Enter") {
      this.fetchData(this.state.filter);
    }
  };

  selectFold = foldNum => {
    const current = this.state.active === foldNum ? -1 : foldNum;
    this.setState(() => ({ active: current }));
  };

  render() {
    return (
      <div className="w-50">
        <div className="input-group-prepend m-5 w-50">
          <span className="input-group-text"> Фильтр(pressEnter) :</span>
          <input
            className="form-control"
            type="text"
            ref={this.filterVal}
            onChange={this.getFilter}
            onKeyPress={this.getEnter}
          />
        </div>
        <div className="accordion">
          {this.state.order.map((content, i) => {
            return (
              <Fold
                key={i}
                order={this.state.order[i]}
                handle={() => this.selectFold(i)}
                active={i === this.state.active}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
