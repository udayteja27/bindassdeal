import React, { Component } from "react";

class AddItem extends Component {
  state = {
    name: "",
    category: "",
    date: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({ name: "", category: "", date: "" });
  };

  render() {
    const { name, category, date } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="category"
          value={category}
          onChange={this.handleChange}
          placeholder="Category"
          required
        />
        <input
          type="date"
          name="date"
          value={date}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddItem;
