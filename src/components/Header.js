import React from 'react';
import './Header.css';

const Header = ({ currentStep }) => {
  const steps = ['Form Selection', 'Set up', 'Form Creation', 'Review'];

  return (
    <div className="header">
      {steps.map((step, index) => (
        <div className='progressbar' key={index}>
          <div className={index !== 0 ? 'line' : 'hide-line'}></div>
          <div key={index} className={`step ${currentStep >= index ? 'completed' : ''}`}>
            <div className={currentStep > index ? "step-complete-icon" : "step-icon"}>
              {currentStep > index ? tick() : index + 1}
            </div>
            <div className="step-title"><p>{step}</p></div>
          </div>
          <div className={index < 3 ? 'line' : 'hide-line'}></div>
        </div>
      ))}
    </div>
  );
};

export default Header;


const tick = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" />
    </svg>
  )
}
