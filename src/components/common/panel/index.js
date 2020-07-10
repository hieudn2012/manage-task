import React from 'react';

export default function Panel(props) {

  const { className, children, collapse, show, onCollapse, textHeader } = props;

  const height = collapse && show ? { height: 450 } : collapse && !show ? { height: 0 } : {}

  return (
    <div className={`card bg-nav-dark ${className}`}>
      {
        collapse &&
        <div className="d-flex justify-content-between p-3 border-bottom border-secondary">
          <b>{textHeader}</b>
          <div onClick={onCollapse} className="pointer zoom">{show ? 'Close' : 'Open'}</div>
        </div>
      }
      <div className="collapse-test" style={height}>
        <div className="p-3">
          {children}
        </div>
      </div>
    </div>
  )
}