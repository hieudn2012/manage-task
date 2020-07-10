import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../components/common/panel'

PanelCheckin.propTypes = {
  data: PropTypes.array.isRequired,
}

PanelCheckin.defaultProps = {
  data: [],
}

export default function PanelCheckin({ data }) {

  const [show, setShow] = useState(true);

  const dataResult = data.slice(0, 7);

  function renderStatus(status) {
    const statusRender = status === 4 ? 'Done' : status === 2 ? 'Inprogress' : status === 3 ? 'Pending' : 'Todo';
    const classStatus = status === 4 ? 'btn-success-outline' : status === 2 ? 'btn-primary-outline' : status === 3 ? 'btn-warning-outline' : 'btn-secondary-outline';
    return <div className={`${classStatus} text-center rounded px-2 py-1`}>{statusRender}</div>
  }

  return (
    <Panel className="mt-4 border border-secondary box-effect" collapse show={show} onCollapse={() => setShow(!show)} textHeader="Task">
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
    </Panel>
  )
}