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
    const classStatus = status === 4 ? 'bg-success' : status === 2 ? 'bg-primary' : status === 3 ? 'bg-warning' : 'bg-secondary';
    return <div className={`${classStatus} text-center rounded`}>{statusRender}</div>
  }

  return (
    <div className="card bg-nav-dark mt-4 wrap-panel-high">
      <div className="card-body">
        <h4>Latest Transaction</h4>
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
              <tr key={index.toString()}>
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