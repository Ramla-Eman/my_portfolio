import React from "react";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="cursor-none">
      <CustomCursor />
      <h1 className="text-7xl text-PrimaryAccent font-BodyText w-full flex items-center justify-center h-screen">
        Starting Portfolio
      </h1>
      <button data-color="#06b76" className="p-4 bg-red-700 text-white">
        Hover Me
      </button>
    </div>
  );
};

export default App;
