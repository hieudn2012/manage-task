import React from 'react';
import PropTypes from 'prop-types';

PanelCheckin.propTypes = {
  data: PropTypes.array.isRequired,
}

PanelCheckin.defaultProps = {
  data: [],
}

export default function PanelCheckin({ data }) {

  const dataResult = data.slice(0, 7);

  function renderStatus(status) {
    const statusRender = status === 4 ? 'Done' : status === 2 ? 'Inprogress' : status === 3 ? 'Pending' : 'Todo';
    const classStatus = status === 4 ? 'btn-success-outline' : status === 2 ? 'btn-primary-outline' : status === 3 ? 'btn-warning-outline' : 'btn-secondary-outline';
    return <div className={`${classStatus} text-center rounded px-2 py-1`}>{statusRender}</div>
  }

  return (
    <div className="card bg-nav-dark mt-4 wrap-panel-high">
      <div className="card-body">
        <h5 className="card-title">Latest Transaction</h5>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date Create</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataResult.map((task, index) =>
              <tr key={index.toString()} className="zoom">
                <th scope="row">{index + 1}</th>
                <td >{task.name}</td>
                <td>{task.dateCreate}</td>
                <td>{renderStatus(task.status)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}