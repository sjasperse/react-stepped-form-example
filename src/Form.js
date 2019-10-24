import React, { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import { set as immutableSet } from 'object-path-immutable';
import _ from "lodash/fp"

export default () => {
  const [step, setStep] = useState(1);
  const [model, setModel] = useState({});
  const [savedModel, setSavedModel] = useState();

  const handleFieldChange = (e) => {
    const value = (() => {
      return e.target.value;
    })();

    const newModel = immutableSet(model, e.target.name, value);
    setModel(newModel);
  };

  const createInputProps = name => {
    return {
      name: name,
      value: _.get(name, model) || '',
      onChange: handleFieldChange
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSavedModel(model);
    if (step < 4) setStep(step+1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mt-1">
            {step > 0 && <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>}
          </div>
          <h1 className="col text-center">Form (step {step}/4)</h1>
          <div className="col text-right mt-1">
            <button type="submit" className="btn btn-primary">{step < 4 ? 'Next' : 'Save'}</button>
          </div>
        </div>

        <div className="mb-2" style={{ border: '1px dashed red', height: '500px', padding: '15px'}}>
          <div style={{ maxWidth: '500px'}}>
            {(() => {
              switch (step) {
                case 1: return <FormStep1 model={model} createInputProps={createInputProps} />
                case 2: return <FormStep2 model={model} createInputProps={createInputProps} />
                case 3: return <FormStep3 model={model} createInputProps={createInputProps} />
                case 4: return <FormStep4 model={model} createInputProps={createInputProps} />
                default: return null;
              }
            })()}
          </div>
        </div>
      </form>

      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">Model</h5>
          <pre>
            {JSON.stringify(model, null, 2)}
          </pre>
        </div>
      </div>

      {savedModel &&
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Saved Model</h5>
          <pre>
            {JSON.stringify(savedModel, null, 2)}
          </pre>
        </div>
      </div>
      }
    </>
  )
}