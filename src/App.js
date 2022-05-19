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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
