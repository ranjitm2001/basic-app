import React from 'react';

const SAMLLoginForm = () => {
  const handleSAMLLogin = async () => {
    window.open('http://localhost:8080/saml2/authenticate/okta', '_blank');
  };

  return (
    <div>
      <h2>SAML Login</h2>
      <button onClick={handleSAMLLogin}>Login with SAML</button>
    </div>
  );
};

export default SAMLLoginForm;
