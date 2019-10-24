import React from 'react';
import Form from './Form';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand">Stepped Form Example</div>
        </div>
      </nav>
      <div className="container">
        <Form />
      </div>
    </>
  );
}

export default App;
