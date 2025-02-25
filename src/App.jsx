import React from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="cursor-none">
      <CustomCursor />
      <Navbar />
      <Menu />
    </div>
  );
};

export default App;
