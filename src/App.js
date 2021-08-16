import React from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contacts";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./timelines";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from "./Components/Nav";
function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Route
          render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) =>
                    play(pathname, node, appears)
                  }
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{ enter: 750, exit: 150 }}
                >
                  <Switch location={location}>
                    <Route exact path="/about">
                      <About />
                    </Route>
                    <Route exact path="/contact">
                      <Contact />
                    </Route>
                    <Route exact path="/project">
                      <Projects />
                    </Route>
                    <Route exact path="/">
                      <Home />
                    </Route>
                  </Switch>
                </Transition>
              </TransitionGroup>
            );
          }}
        />
      </div>
    </Router>
  );
}

export default App;
