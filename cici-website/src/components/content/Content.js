

import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./content.module.css";
import { Contact} from "../pages/contact/Contact";
import { Home} from "../pages/home/Home";

// import { BookSlider } from "../../bookslider";
// import { BioCard } from "../../bio-card";


export const Content = () => {
  return (
    <section className="appBody">
      <Switch>
        <Route exact path="/">
        <Home/>      
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </section>
  );
};



