import React, { useState, useEffect } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Travelogue from "./components/Travelogue";
import LatestNews from "./components/LatestNews";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Goodgraph from "./components/Goodgraph";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Spin from "../src/components/images/spin2.gif";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {/* <div className="App"> */}
      {loading ? (
        // <ClimbingBoxLoader
        //   loading={loading}
        //   size={230}
        //   color={"#F37A24"}
        //   className="App position-absolute top-50 start-50 translate-middle mx-5 my-5"
        // />

        <img
          src={Spin}
          alt="Loading"
          className="position-absolute top-50 start-50 translate-middle"
          height={"200vh"}
        />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home key="home" />}></Route>
            <Route exact path="about" element={<About key="about" />}></Route>
            <Route
              exact
              path="latestnews"
              element={<LatestNews key="latestnews" />}
            ></Route>
            <Route
              exact
              path="travelogue"
              element={<Travelogue key="travelogue" />}
            ></Route>
            <Route
              exact
              path="goodgraph"
              element={<Goodgraph key="goodgraph" />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Chatbot />
          <Footer />
        </BrowserRouter>
      )}
      {/* </div> */}
    </>
  );
}

export default App;
