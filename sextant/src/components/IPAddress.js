import { useState, useEffect } from 'react';

function IPAddress() {
  const [ipAddress, setIpAddress] = useState([]);

  useEffect(() => {
    getIP();
  }, []);

  const getIP = () =>
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        setIpAddress(data);
      });

  return (
    <div className='IP-card'>
      <p>Public IP Address</p>
      <p>{ipAddress.ip}</p>
    </div>
  );
}

export default IPAddress;
