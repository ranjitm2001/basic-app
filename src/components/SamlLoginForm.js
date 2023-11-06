import React from 'react';

const SAMLLoginForm = () => {
  const handleSAMLLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/saml2/authenticate/okta', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary authentication headers or credentials
        },
      });
      const data = await response.json();
      // Handle the SAML token response as required
      console.log('SAML Token:', data);
      // Possibly store the SAML token for further use
    } catch (error) {
      console.error('Error occurred during SAML login:', error);
    }
  };

  return (
    <div>
      <h2>SAML Login</h2>
      <button onClick={handleSAMLLogin}>Login with SAML</button>
    </div>
  );
};

export default SAMLLoginForm;
