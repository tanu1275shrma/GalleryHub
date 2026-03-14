import React from "react";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 tracking-tight text-pink-800">
        Photo Gallery
      </h1>

      <Gallery />
    </div>
  );
}

export default App;
