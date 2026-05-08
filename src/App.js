import React from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      
      {/* 1. Global Background - Stays visible on every page */}
      <ParticlesBackground />
      
      {/* 2. Global Navigation */}
      <Navbar />
      
      {/* 3. Page Content - Only this part changes when you click links */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
export default App;
