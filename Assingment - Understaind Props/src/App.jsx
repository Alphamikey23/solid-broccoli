import React from 'react';
import './App.css';
import ImageData from './components/DataComponent';

function App(props) {
  // Using props.data to access the passed data
  const data = ImageData(); // If props.data exists, use it, otherwise fallback to ImageData().
  console.log(data.id);
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

export default App;