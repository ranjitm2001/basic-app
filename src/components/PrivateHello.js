// PrivateHello.js
import React, { useState } from 'react';

const PrivateHello = () => {
  const [response, setResponse] = useState('');
  console.log(location.search);
  const params = new URLSearchParams(location.search);

  // You can access specific parameters:
  console.log(params.get('token'))
  console.log(params.get('a'))

  sessionStorage.setItem('token', params.get('token'));

  const fetchPrivateData = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const result = await fetch('http://localhost:8080/private/hello', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            // 'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            // 'Access-Control-Allow-Methods': 'OPTIONS,GET,PUT,DELETE,POST',
            // 'Access-Control-Allow-Credentials': true,
            // 'Access-Control-Allow-Origin': '*',
            // 'X-Requested-With': '*',
          },
        });

        if (result.ok) {
          const data = await result.text();
          setResponse(data);
        } else {
          console.error('Error fetching private data');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    } else {
      console.log('Token not found');
    }
  };

  return (
    <div>
      <h2>Private Hello</h2>
      <button onClick={fetchPrivateData}>Get Private Hello</button>
      <p>{response}</p>
    </div>
  );
};

export default PrivateHello;
