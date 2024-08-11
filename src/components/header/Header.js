import React from 'react';
import './Header.css';

const Header = ({ currentStep }) => {
  const steps = ['Form Selection', 'Set up', 'Form Creation', 'Review'];

  return (
    <div className="header">
      <div className="header-progress">
        {steps.map((step, index) => (
          <div className='progressbar' key={index}>
            <div className={index !== 0 ? 'line' : 'hide-line'}></div>
            <div key={index} className={`step ${currentStep >= index ? 'completed' : ''}`}>
              <div className={currentStep > index ? "step-complete-icon" : "step-icon"}>
                {currentStep > index ? tick() : index + 1}
              </div>
              <span className="step-title">{step}</span>
            </div>
            <div className={index < 3 ? 'line' : 'hide-line'}></div>
          </div>
        ))}
      </div>
      <div className='cross-btn'>
        {cross()}
      </div>

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

const cross = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20" />
    </svg>
  )
}
