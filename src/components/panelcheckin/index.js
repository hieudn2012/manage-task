import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

PanelCheckin.propTypes = {
  data: PropTypes.array.isRequired,
}

PanelCheckin.defaultProps = {
  data: [],
}

export default function PanelCheckin({ data }) {

  const dataResult = data.slice(0, 7);

  return (
    <div className="card bg-nav-dark mt-4 wrap-panel-high">
      <div className="card-body">
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
      </div>
    </div>
  )
}