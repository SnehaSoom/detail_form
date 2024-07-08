import React, { useState } from 'react';
import './StatementOfPurposeForm.css';

const StatementOfPurposeForm = () => {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [enquiryData, setEnquiryData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnquiryData([...enquiryData, { question1, question2, question3 }]);
    setQuestion1('');
    setQuestion2('');
    setQuestion3('');
  };

  return (
    <form onSubmit={handleSubmit} className='statement_form'>
      <div>
        <label htmlFor="question1">1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?</label>
        <textarea
          id="question1"
          value={question1}
          onChange={(event) => setQuestion1(event.target.value)}
          required
          className="textarea"
        />
      </div>
      <div>
        <label htmlFor="question2">2. Tell me about the last time something significant didn't go according to plan at work. What was your role? What was the outcome?</label>
        <textarea
          id="question2"
          value={question2}
          onChange={(event) => setQuestion2(event.target.value)}
          required
          className="textarea"
        />
      </div>
      <div>
        <label htmlFor="question3">3. What are the three things that are most important to you in a job?</label>
        <textarea
          id="question3"
          value={question3}
          onChange={(event) => setQuestion3(event.target.value)}
          required
          className="textarea"
        />
      </div>
    </form>
  );
};

export default StatementOfPurposeForm;