import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/home/index';
import Landing from '../pages/landing/index';

export default function RouterConFig() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/dashboard">
        <Home />
      </Route>
    </Switch>
  )
}