import React, { Component } from "react";

class EditItem extends Component {
  state = {
    ...this.props.item,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onEdit(this.state);
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
        <button type="submit">Save Changes</button>
      </form>
    );
  }
}

export default EditItem;
