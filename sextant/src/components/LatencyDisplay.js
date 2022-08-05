import { useEffect, useState } from 'react';
import { w3cwebsocket } from 'websocket';
const client = new w3cwebsocket('ws://localhost:55455');

function LatencyDisplay() {
  const [latency, setLatency] = useState('loading');

  useEffect(() => {
    client.onmessage = (event) => {
      const response = event.data;
      const currentTime = Date.now();
      setLatency(currentTime - response);
    };
  }, []);

  return (
    <div className='latency-display'>
      <p>{latency}</p>
    </div>
  );
}

export default LatencyDisplay;
