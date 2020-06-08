import React from "react";

//react router dom components
import { BrowserRouter, Route } from "react-router-dom";

//component imports
import ArtistList from "./Artists/ArtistList";
import Header from "./HeaderAndFooter/Header";
import Home from "./Home/Home";
import Footer from "./HeaderAndFooter/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/artists" exact component={ArtistList} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
