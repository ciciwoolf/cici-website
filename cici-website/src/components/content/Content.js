

import React from "react";
import { Switch, Route } from "react-router-dom";
//import styles from "./content.module.css";
import { Contact} from "../pages/contact/Contact";
import { Home} from "../pages/home/Home";


export const Content = () => {
  return (
      <Switch>
        <Route exact path="/">
        <Home/>      
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
  );
};



