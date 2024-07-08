import React from 'react';

const FormSelection = ({ onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect('details')}>Details Collection</button>
      <button onClick={() => onSelect('document')}>Document Collection</button>
      <button onClick={() => onSelect('statement')}>Statement of Purpose</button>
      <button onClick={() => onSelect('interview')}>Interview Availability</button>
    </div>
  );
};

export default FormSelection;
