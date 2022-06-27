// Components
import Header from "./components/Header";
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from  "./pages/Projects";

import "./App.scss"

function App() {
  const URL = "https://portfolio-austin-lu.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects URL={URL}/>}/>
        <Route path="/about" element={<About URL={URL} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
