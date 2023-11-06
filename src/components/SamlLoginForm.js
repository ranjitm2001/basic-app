import React from 'react';

const SAMLLoginForm = () => {
  const handleSAMLLogin = async () => {
    window.open('http://localhost:8080/saml2/authenticate/okta', '_blank');
    // try {
      // const response = await fetch('http://localhost:8080/saml2/authenticate/okta', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // Include any necessary authentication headers or credentials
    //     },
    //   });
    //   const htmlResponse = await response.text();

    //   // Extract the SAMLRequest value from the HTML response
    //   const parser = new DOMParser();
    //   const doc = parser.parseFromString(htmlResponse, 'text/html');
    //   const samlRequest = doc.querySelector('input[name="SAMLRequest"]').value;

    //   // Create a form dynamically
    //   const form = document.createElement('form');
    //   form.method = 'POST';
    //   form.action = 'https://dev-21824939.okta.com/app/dev-21824939_localsimpleapp_1/exkcpw27nlbsux0BB5d7/sso/saml';
    //   const input = document.createElement('input');
    //   input.type = 'hidden';
    //   input.name = 'SAMLRequest';
    //   input.value = samlRequest;
    //   form.appendChild(input);

    //   // Hide the form
    //   form.style.display = 'none';

    //   // Append form to the body
    //   document.body.appendChild(form);

    //   // Submit the form on button click
    //   form.submit();
    // } catch (error) {
    //   console.error('Error occurred during SAML login:', error);
    // }
  };

  return (
    <div>
      <h2>SAML Login</h2>
      <button onClick={handleSAMLLogin}>Login with SAML</button>
    </div>
  );
};

export default SAMLLoginForm;
