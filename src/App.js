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
import Analysis from "./components/Analysis";
// import GetLocation from "./components/GetLocation";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Spin from "../src/components/images/spin2.gif";
// import AlanAI from "../src/components/AlanAI";
// import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // const alanBtnInstance = useRef(null);

  // const alanKey =
  //   "4ccacafa9ad5a7c2db05cd214405b57a2e956eca572e1d8b807a3e2338fdd0dc/stage";
  // useEffect(() => {
  //   alanBtn({
  //     bottom: "15px",
  //     left: "15px",
  //     key: alanKey,
  //   });
  // }, []);

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
          {/* <AlanAI /> */}
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
              path="analysis"
              element={<Analysis key="analysis" />}
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
