import React from 'react';


export default ({createInputProps}) => {
  
  return (
    <div className="step-component">
      <h2>Step 1</h2>
      <div>
        <h3>Client</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" required {...createInputProps('client.name')} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" required {...createInputProps('client.address')} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" required {...createInputProps('client.phone')} />
        </div>
      </div>
    </div>
  );
}