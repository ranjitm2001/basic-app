import React, { useState } from 'react';

const LogoutPage = () => {
  const [message, setMessage] = useState('');

  const handleLogout = () => {
    try {
      // Simulate clearing session
      sessionStorage.clear();

      // Simulate a delay before redirecting after session clearance
      setTimeout(() => {
        setMessage('Logged out successfully.');
        // Redirect to http://localhost:3000 after successful logout with a query parameter
        window.location.href = 'http://localhost:3000?logout=true&session=cleared';
      }, 200); // You can adjust the delay time as needed
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
