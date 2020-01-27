import React, { Component } from "react";
import OpenOrderPunct from "./OpenOrderPunct";
const url = "http://127.0.0.1:8080/api/order";

class Fold extends Component {

  render() {
    const order = this.props.order;
    return (
      <div className="fold">
        <button className="btn btn-secondary btn-lg btn-block m-3"
          onClick={this.props.handle}
        >{`${order.docDate} , ${order.docNum} , ${order.description}`}</button>
        <div
          key="content"
          className={` ${this.props.active ? "open" : "close"}`}
        >
          <OpenOrderPunct url={`${url}/${order.id}`}   />
        </div>
      </div>
    );
  }
}

export default Fold;
