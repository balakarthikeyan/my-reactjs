import React, { Component } from "react";
import ShopForm from "./ShopForm";
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Milk",
          qty: "2 gal",
        },
        { name: "Bread", qty: "2 loaves" },
      ],
    };
    this.addItems = this.addItems.bind(this);
  }
  // ADD(ITEMS)
  addItems(item) {
    this.setState((state) => ({
      items: [...state.items, item],
    }));
  }
  render() {
    return (
      <React.Fragment>
        {this.state.items.map((item) => (
          <li>
            {item.name}: {item.qty}
          </li>
        ))}
        <hr />
        <ShopForm
          addItems={this.addItems}
        />
      </React.Fragment>
    );
  }
}

export default Shop;
