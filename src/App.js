import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Header from "./Components/Header/Header";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Counter />
    </React.Fragment>
  );
}

export default App;
