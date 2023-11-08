import React, { useState } from 'react';

const PrivateHello = () => {
  const [response, setResponse] = useState('');

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  if (token) {
    sessionStorage.setItem('token', token);
  }

  const fetchPrivateData = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const result = await fetch('http://localhost:8080/private/hello', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          mode: 'cors', // Ensure CORS mode is explicitly set
          credentials: 'include', // Include credentials (cookies)
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
