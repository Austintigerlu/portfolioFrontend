// Components
import NavBar from "./components/NavBar";
import Social from "./components/Social"

// Pages
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
