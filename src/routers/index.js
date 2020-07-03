import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/home';
import Landing from '../pages/login';

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