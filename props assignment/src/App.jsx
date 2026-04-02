import React from 'react';
import './App.css';
import imageData from './components/DataComponent';

function App(props) {
  // code here
  const data=imageData();
  // console.log(data);
  // console.log(props.data);
  // console.log(props);
  
  
  return (
    <div>
      
      <h1>Kalvium Gallery</h1>
      <div className="row">
        {props.data.map((image) => (
          <div className="column" key={image.id}>
            <img src={image.img} alt={`Gallery image ${image.img}`} />
            </div>))}

        
      </div>

      
    </div>
  );
}

export default App;