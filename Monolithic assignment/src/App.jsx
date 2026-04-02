import './App.css';
import GallaryBody from './components/GallaryBody';
import GallaryHeader from './components/GallaryHeader';
import GallaryFooter from "./components/GallaryFooter";

function App(props) {
  // Capture the data passed from the test/parent
  const imageData = props.data;
  const name="john";

  return (
    <div>
      {/* TODO: Render the Header Component here */}
      <GallaryHeader />

      {/* 
        TODO: Render the Body Component here 
        Important: Pass 'imageData' to it as a prop!
      */}
      <GallaryBody data = {name}/>
      

      {/* TODO: Render the Footer Component here */}
      <GallaryFooter />
    </div>
  );
}

export default App;