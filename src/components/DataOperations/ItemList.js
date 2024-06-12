import React from "react";
import "./ItemList.css";

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <table className="item-list-table">
      <thead className="item-list-table thead tr">
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
            <td>
              <button className="edit-button" onClick={() => onEdit(item)}>
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
