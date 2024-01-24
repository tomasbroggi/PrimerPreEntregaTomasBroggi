import { useState } from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {


  return (
    <div className="App">
      <Header
        title="Tu Birra Bar"
      />
      <NavBar />
      <ItemListContainer />

    </div>
  );
};

export default App;
