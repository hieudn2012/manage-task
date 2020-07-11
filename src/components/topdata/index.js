import React from 'react';
import Panel from '../common/panel';

export default function TopData() {
  return (
    <div className="container-fluid">
      <h4 className="mt-4">Dashboard</h4>
      <div className="row">
        <div className="col-md-3">
          <Panel className="mt-2 zoom">
            <h5 className="card-title text-primary">Total Task</h5>
            <p className="card-text">2993</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </Panel>
        </div>
        <div className="col-md-3">
          <Panel className="mt-2 zoom">
            <h5 className="card-title text-danger">Todo</h5>
            <p className="card-text">1232</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </Panel>
        </div>
        <div className="col-md-3">
          <Panel className="mt-2 zoom">
            <h5 className="card-title text-warning">Inprogress</h5>
            <p className="card-text">23</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </Panel>
        </div>
        <div className="col-md-3">
          <Panel className="mt-2 zoom">
            <h5 className="card-title text-success">Done</h5>
            <p className="card-text">1020</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </Panel>
        </div>
      </div>
    </div>
  )
}