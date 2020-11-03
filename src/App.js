import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Clinic from "./sections/Clinic";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Clinic />
    </>
  );
}

export default App;
