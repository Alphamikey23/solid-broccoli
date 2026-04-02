import React, { Component } from "react";
import './App.css';

export default class AppClass extends Component {
  render() {
    // Access data via this.props.data
    const { data } = this.props;

    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className="row">
          {data.map((image) => (
            <div key={image.id} className="column">
              <img src={image.img} alt={`Gallery image ${image.id}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}