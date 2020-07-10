import React, { useState } from 'react';
import Panel from '../common/panel';

export default function PanelChat() {

  const [show, setShow] = useState(true);

  return (
    <Panel className="mt-4 border border-secondary box-effect" collapse show={show} onCollapse={() => setShow(!show)} textHeader="Chat">
      <div>
        <h5 className="card-title">Chat Room</h5>
      </div>
    </Panel>
  )
}