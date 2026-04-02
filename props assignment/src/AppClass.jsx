import React, { Component } from "react";
import "./App.css";
import imageData from "./components/DataComponent";

export default class AppClass extends Component {
  render() {
    // code here
    const data = imageData();

    return (
      <div>
        {/* 
          TODO: 
          1. Render the same HTML structure as App.jsx 
          2. Access data using this.props.data 
          3. Map through the data and render images 
        */}

        <h1>Kalvium Gallery</h1>
      <div className="row">
        {this.props.data.map((image) => (
          <div className="column" key={image.id}>
            <img src={image.img} alt={`Gallery image ${image.img}`} />
            </div>))}

        
      </div>

        
      </div>
    );
  }
}