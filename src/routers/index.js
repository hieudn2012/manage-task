import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Landing from '../pages/Landing';

export default function RouterConFig() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  )
}