import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Panel from '../common/panel';

PanelCheckin.propTypes = {
  data: PropTypes.array.isRequired,
}

PanelCheckin.defaultProps = {
  data: [],
}

export default function PanelCheckin({ data }) {

  const [show, setShow] = useState(true);

  const dataResult = data.slice(0, 7);

  return (
    <Panel className="mt-4 border border-secondary box-effect" collapse show={show} onCollapse={() => setShow(!show)} textHeader="Checkin">
      <h5 className="card-title">Checkin</h5>
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Checkin</th>
            <th scope="col">Checkout</th>
          </tr>
        </thead>
        <tbody>
          {dataResult.map((task, index) =>
            <tr key={index.toString()} className="zoom">
              <th scope="row">{index + 1}</th>
              <td >{moment(task.date).format('DD/MM/YYYY')}</td>
              <td className="text-success">{moment(task.checkin).format('HH:mm:ss')}</td>
              <td className="text-success">{moment(task.checkout).format('HH:mm:ss')}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Panel>
  )
}