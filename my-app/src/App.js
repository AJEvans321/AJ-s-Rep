import React, { useState } from "react";
import "./App.css"; 
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.jpg"
import pic4 from "./images/pic4.jpg"

function Child ({ title, imgSrc, onChange }) {
  return ( 
    <div className="child">
      <h2>{title}</h2>
      <img src={imgSrc} alt="Child Content" width="200px" />
      <button onClick={onChange}>Change Image</button>
      </div>
  );
}

function App() {
  const [image1, setImage1] = useState(pic1);
  const [image2, setImage2] = useState(pic3);

  //change between pic 1 and pic 2 for child 1
  const handleImageChange1 = () => {
    setImage1((prev) => (prev === pic1 ? pic2 : pic1 ));
  };
  
//change between pic 3 and pic 4 for child 2
const handleImageChange2 = () => {
  setImage2((prev) => (prev === pic3 ? pic4 : pic3 ));
};

  return ( 
    <div className="App">
      <h1>Parent Component</h1>
      <Child title="Which one is the better HBCU" imgSrc={image1} onChange={handleImageChange1} />
      <Child title="Which NBA player is the GOAT" imgSrc={image2} onChange={handleImageChange2} />
    </div>
  );
}
export default App;
