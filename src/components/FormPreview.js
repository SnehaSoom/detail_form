import React from 'react';
import Form from './Form';
import DocumentCollectionForm from './DocumentCollectionForm';
import StatementOfPurposeForm from './StatementOfPurposeForm';
import InterviewAvailability from './InterviewAvailability';
import './FormPreview.css';

const FormPreview = ({ formName }) => {
  const formTitles = {
    details: 'Details Collection',
    document: 'Document Collection',
    statement: 'Statement of Purpose',
    interview: 'Interview Availability'
  };

  const descriptions = {
    details: 'Collect information from Candidates on their education, work experience, contact no, etc.',
    document: 'Save time and efforts: Explore this template to find a set of questions required for document collection.',
    statement: 'Start creating a new form with the wide options of fields available.',
    interview: 'Start creating a new form with the wide options of fields available.'
  };

  let formComponent;
  switch (formName) {
    case 'document':
      formComponent = <DocumentCollectionForm />;
      break;
    case 'statement':
      formComponent = <StatementOfPurposeForm />;
      break;
    case 'interview':
      formComponent = <InterviewAvailability />;
      break;
    default:
      formComponent = <Form />;
  }

  return (
    <div className="form-preview">
      <h3>{formTitles[formName]} Enquiry Form</h3>
      <p>{descriptions[formName]}</p>
      {formComponent}
    </div>
  );
};

export default FormPreview;