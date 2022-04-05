import { useState } from "react";
import Dashboard from "./components/Dashboard";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Dashboard />
    </div>
  );
}

export default App;
