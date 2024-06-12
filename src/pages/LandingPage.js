import React, { Component } from "react";
import AddItem from "../components/DataOperations/AddItem";
import EditItem from "../components/DataOperations/EditItem";
import ItemList from "../components/DataOperations/ItemList";
import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    items: [
      { id: 1, name: "Item 1", category: "Category A", date: "2024-06-01" },
      { id: 2, name: "Item 2", category: "Category B", date: "2024-06-02" },
      { id: 3, name: "Item 3", category: "Category A", date: "2024-06-03" },
    ],
    editingItem: null,
  };

  addItem = (item) => {
    item.id = this.state.items.length + 1;
    this.setState({ items: [...this.state.items, item] });
  };

  editItem = (item) => {
    this.setState({
      items: this.state.items.map((i) => (i.id === item.id ? item : i)),
      editingItem: null,
    });
  };

  deleteItem = (id) => {
    this.setState({ items: this.state.items.filter((item) => item.id !== id) });
  };

  startEditing = (item) => {
    this.setState({ editingItem: item });
  };

  render() {
    const { items, editingItem } = this.state;
    return (
      <div className="landing-page">
        <h2>DATA</h2>
        {editingItem ? (
          <div className="form-container">
            <EditItem item={editingItem} onEdit={this.editItem} />
          </div>
        ) : (
          <div className="form-container">
            <AddItem onAdd={this.addItem} />
          </div>
        )}
        <div className="table-container">
          <ItemList
            items={items}
            onEdit={this.startEditing}
            onDelete={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;
