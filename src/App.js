import { useState } from "react";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";

function App() {
  const [color, setColor] = useState("white");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <div className="App">
      <Nav />
      <div className="flex">
        <Carousel color={color} />

        <Sidebar onColorChange={handleColorChange} />
      </div>
    </div>
  );
}

export default App;
