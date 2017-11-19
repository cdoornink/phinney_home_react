import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/pages/home";
import About from "../components/pages/about";
import Projects from "../components/pages/projects";
import Services from "../components/pages/services";
import Contact from "../components/pages/contact";
import Social from "../components/pages/social";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route path="/social" component={Social} />
  </Switch>
);
