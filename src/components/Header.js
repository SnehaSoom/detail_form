import React from 'react';
import './Header.css';

const Header = ({ currentStep }) => {
  const steps = ['Form Selection', 'Set up', 'Form Creation', 'Review'];
  
  return (
    <div className="header">
      {steps.map((step, index) => (
        <div key={index} className={`step ${currentStep >= index ? 'completed' : ''}`}>
          <div className="step-icon">
            {currentStep > index ? '✔️' : index + 1}
          </div>
          <div className="step-title">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Header;
