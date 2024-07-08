import React from 'react';
import './Navigation.css';

const Navigation = ({ selectedTemplate, onSelect }) => {
  return (
    <div className="navigation">
      <div
        className={`template ${selectedTemplate === 'details' ? 'selected' : ''}`}
        onClick={() => onSelect('details')}
      >
        <h4>Details Collection</h4>
        <p>Collect information from Candidates on their education, work experience, contact no, etc.</p>
      </div>
      <div
        className={`template ${selectedTemplate === 'document' ? 'selected' : ''}`}
        onClick={() => onSelect('document')}
      >
        <h4>Document Collection</h4>
        <p>Save time and efforts: Explore this template to find a set of questions required for document collection.</p>
      </div>
      <div
        className={`template ${selectedTemplate === 'statement' ? 'selected' : ''}`}
        onClick={() => onSelect('statement')}
      >
        <h4>Statement of Purpose</h4>
        <p>Start creating a new form with the wide options of fields available.</p>
      </div>
      <div
        className={`template ${selectedTemplate === 'interview' ? 'selected' : ''}`}
        onClick={() => onSelect('interview')}
      >
        <h4>Interview Availability</h4>
        <p>Start creating a new form with the wide options of fields available.</p>
      </div>
    </div>
  );
};

export default Navigation;
