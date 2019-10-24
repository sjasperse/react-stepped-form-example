import React from 'react';


export default ({createInputProps}) => {
  
  return (
    <div className="step-component">
      <h2>Step 3</h2>
      <div>
        <h3>Employer</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" required {...createInputProps('employer.name')} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" {...createInputProps('employer.address')} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" {...createInputProps('employer.phone')} />
        </div>
      </div>
    </div>
  );
}