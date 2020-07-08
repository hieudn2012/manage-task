import React from 'react';

export default function TopData() {
  return (
    <div className="container-fluid">
      <h4 className="mt-4">Dashboard</h4>
      <div className="row">
        <div className="col-md-3">
          <div className="card bg-primary mt-2">
            <div className="card-body">
              <h5 className="card-title">Total Task</h5>
              <p className="card-text">2993</p>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-secondary mt-2">
            <div className="card-body">
              <h5 className="card-title">Todo</h5>
              <p className="card-text">1232</p>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-warning mt-2">
            <div className="card-body">
              <h5 className="card-title">Inprogress</h5>
              <p className="card-text">23</p>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card bg-success mt-2">
            <div className="card-body">
              <h5 className="card-title">Done</h5>
              <p className="card-text">1020</p>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}