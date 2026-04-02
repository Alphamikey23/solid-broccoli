import { Component } from "react";
import DisplayListOfItems from "./components/DisplayListOfItems";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfItems: [],
      item: {
        key: "",
        itemDescription: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // Handle typing in input
  handleInput(event) {
    const value = event.target.value;

    this.setState({
      item: {
        key: Date.now(),
        itemDescription: value,
      },
    });
  }

  // Add item
  handleSubmit(e) {
    e.preventDefault();

    const newItem = this.state.item;

    if (newItem.itemDescription.trim() !== "") {
      this.setState((prevState) => ({
        listOfItems: [...prevState.listOfItems, newItem],
        item: { key: "", itemDescription: "" },
      }));
    }
  }

  // Delete item
  handleDelete(key) {
    const updatedList = this.state.listOfItems.filter(
      (item) => item.key !== key
    );

    this.setState({
      listOfItems: updatedList,
    });
  }

  // Update item
  handleUpdate(newDescription, key) {
    const updatedItems = this.state.listOfItems.map((item) =>
      item.key === key
        ? { ...item, itemDescription: newDescription }
        : item
    );

    this.setState({
      listOfItems: updatedItems,
    });
  }

  render() {
    return (
      <div className="main">
        <header>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              value={this.state.item.itemDescription}
              onChange={this.handleInput}
            />
            <button type="submit">Add Item</button>
          </form>

          <DisplayListOfItems
            listOfItems={this.state.listOfItems}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </header>
      </div>
    );
  }
}