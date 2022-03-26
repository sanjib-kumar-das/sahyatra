import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import Updates from "./components/Updates";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home key="home" />}></Route>
          <Route
            exact
            path="updates"
            element={<Updates key="updates" />}
          ></Route>
          <Route
            exact
            path="contribute"
            element={<Contribute key="contribute" />}
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
