import React from "react";
import { useState } from 'react';
import "./App.scss";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Store } from "./store/store";
// import Basket from "./store/basket"

function Step1(props) {
  // const [basket, setBasket] = useState([]);
  // if()
  // const [basket, setBasket] = useState([]);
  return (
    <div className="step-container-1">
      <Store />

      <Button className="button btn-black" type="primary" onClick={props.next}>
        Add to cart
      </Button>
    </div>
  );
}
export { Step1 };

export class Step2 extends React.Component {
  render() {
    // if()
    return (
      <div className="step-container-2">
        <h1>Your order</h1>
      </div>
    );
  }
}

export class Step3 extends React.Component {
  render() {
    // if()
    return (
      <div>
        <h1>hollalal</h1>
      </div>
    );
  }
}
export class Step4 extends React.Component {
  render() {
    // if()
    return (
      <div>
        <h1>hollalal</h1>
      </div>
    );
  }
}
export class Step5 extends React.Component {
  render() {
    // if()
    return (
      <div>
        <h1>hollalal</h1>
      </div>
    );
  }
}
