import React, { Component } from "react";

class OpenOrderPunct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentWillReceiveProps() {
    this.getProduct();
  }
  async getProduct() {
    let response = await fetch(this.props.url);
    let products = await response.json();
    this.setState({ products });
  }

  render() {
    return (
      <div>
        {this.state.products.map((item, index) => (
          <ul key={item.id}>
            <li className="alert alert-info">{`${item.name} ${item.qty} ${item.price} ${item.sum}`}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default OpenOrderPunct;
