import { useState } from 'react';

function LatencyDisplay() {
  const [latency, setLatency] = useState(0);

  const websocket = new WebSocket('ws://localhost:55455');
  websocket.onmessage = (event) => {
    const response = event.data
    const currentTime = Date.now()
    setLatency(currentTime - response)
  };

  return (
    <div className='latency-display'>
      <p>{latency}</p>
    </div>
  );
}

export default LatencyDisplay;
