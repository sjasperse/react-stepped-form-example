import React from 'react';


export default ({createInputProps}) => {
  
  return (
    <div className="step-component">
      <h2>Step 4</h2>
      <div>
        <h3>Additional Notes</h3>
        <div className="form-group">
          <label>Notes</label>
          <textarea className="form-control" {...createInputProps('additionalNotes')} />
        </div>
      </div>
    </div>
  );
}