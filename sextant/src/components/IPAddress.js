import { useState, useEffect } from 'react';

function IPAddress({ url }) {
  const [ipAddress, setIpAddress] = useState([]);

  useEffect(() => {
    getIP();
  }, []);

  async function getIP() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIpAddress(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='ip-address-display'>
      {ipAddress.ip ? <p>{ipAddress.ip}</p> : <p>'Loading'</p>}
    </div>
  );
}

export default IPAddress;
