import React from 'react';


export default ({createInputProps}) => {
  
  return (
    <div className="step-component">
      <h2>Step 2</h2>
      <div>
        <h3>Referral</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" required {...createInputProps('employer.name')} />
        </div>
        <div className="form-group">
          <label>Relationship</label>
          <select className="form-control" required {...createInputProps('referral.relationship')}>
            <option disabled value="">Select</option>
            <option>Friend</option>
            <option>Relative</option>
            <option>Coworker</option>
            <option>Employer</option>
            <option>Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}