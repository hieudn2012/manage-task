import React from 'react';

export default function Notification({ show, children }) {
  return (
    <div id="main-notification" className={show && 'show'}>
      {children}
    </div>
  )
}