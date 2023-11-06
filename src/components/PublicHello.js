// PublicHello.js
import React, { useState } from 'react';

const PublicHello = () => {
  const [response, setResponse] = useState('');
  
  const fetchPublicData = async () => {
    try {
      const result = await fetch('http://localhost:8080/public/hello');
      if (result.ok) {
        const data = await result.text();
        setResponse(data);
      } else {
        console.error('Error fetching public data');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Public Hello</h2>
      <button onClick={fetchPublicData}>Get Public Hello</button>
      <p>{response}</p>
    </div>
  );
};

export default PublicHello;
