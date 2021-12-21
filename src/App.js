import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <h1>Error 404: Page not found</h1>
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
