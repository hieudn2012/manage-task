import React from 'react';
import NavLanding from '../../components/navlanding';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashBoard from '../../components/dashboard';
import TaskManage from '../../components/taskmanage';
import Checkin from '../../components/checkin';

function Home() {

  return (
    <Router>
      <div>
        <header>
          <section>
            <NavLanding />
          </section>
        </header>
        <main>
          <div className="ctn-home">
            <Switch>
              <Route exact path="/dashboard">
                <DashBoard />
              </Route>
              <Route exact path="/taskmanage">
                <TaskManage />
              </Route>
              <Route exact path="/checkin">
                <Checkin />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default Home; 