

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Contact } from "../pages/contact/Contact";
import { Gallery } from "../pages/gallery/Gallery";
import { Home} from "../pages/home/Home";


export const Content = () => {
  return (
      <Switch>
        <Route exact path="/">
          <Home/>      
        </Route>
        <Route exact path="/gallery">
          <Gallery/>
        </Route>
        <Route exact path="/contacts">
          <Contact />
        </Route>
        <Route path="*">
          <Redirect
              to={{
                pathname: "/",
              }}
            />      
        </Route>
      </Switch>
  );
};



