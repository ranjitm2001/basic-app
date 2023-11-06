import React, { useState } from 'react';

const LogoutPage = () => {
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/saml-logout', {
        method: 'GET',
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.text();
        setMessage(data);
        sessionStorage.clear();
        // Redirect to http://localhost:3000 after successful logout with a query parameter
        window.location.href = 'http://localhost:3000?logout=true&session=cleared';
      } else {
        setMessage('Error logging out');
      }
    } catch (error) {
      setMessage('Error occurred during logout');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Logout Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <p>{message}</p>
    </div>
  );
};

export default LogoutPage;
