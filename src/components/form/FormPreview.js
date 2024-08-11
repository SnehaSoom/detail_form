import React from 'react';
import Form from './components/Form';
import DocumentCollectionForm from './components/DocumentCollectionForm';
import StatementOfPurposeForm from './components/StatementOfPurposeForm';
import InterviewAvailability from './components/InterviewAvailability';
import './FormPreview.css';

const FormPreview = ({ formName }) => {
  const formTitles = {
    details: 'Details Collection',
    document: 'Document Collection',
    statement: 'Statement of Purpose',
    interview: 'Interview Availability'
  };

  const descriptions = {
    details: 'Provide the following information to process your application',
    document: 'Provide the following information to process your application',
    statement: 'Provide the following information to process your application',
    interview: 'Provide the following information to process your application'
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
      <div className='formPreview-title'>
        <h3>{formTitles[formName]} Name of the Enquiry Form</h3>
        <span>One line description of the form</span>
        <p>{descriptions[formName]}</p>
      </div>
      {formComponent}
    </div>
  );
};

export default FormPreview;