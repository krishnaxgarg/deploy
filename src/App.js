import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import "./App.css";
import Footer from "./components/Footer";
import SecondaryFooter from "./components/SecondaryFooter";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Footer />
      <SecondaryFooter />
    </div>
  );
};

export default App;
