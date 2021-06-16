import React, { Component } from "react";
import PropTypes from "prop-types";
class ShopForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      name: "",
      qty: "",
    });
    this.props.addItems(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="enter qty"
            name="qty"
            value={this.state.qty}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </React.Fragment>
    );
  }
}

ShopForm.propTypes = {
  addItems: PropTypes.func.isRequired
};

export default ShopForm;
