import React, { useEffect, useState } from 'react';
import { Message } from '@patandzeb/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: 'Hello' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to recipe-in-a-pod!</h1>
        <img
          width="450"
          alt="Nx logo"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
