import React, { useState } from "react";
import "./DocumentCollectionForm.css";

const DocumentCollectionForm = () => {
  const [formState, setFormState] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
    graduationMarksheet: null,
    postGraduationMarksheet: null,
    offerLetter: null,
    salarySlips: null,
    bankStatement: null,
    incrementLetter: null,
    others: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormState({
      ...formState,
      [name]: files[0],
    });
  };

  // const validateForm = () => {
  //   const requiredFields = [
  //     "tenthMarksheet",
  //     "twelfthMarksheet",
  //     "graduationMarksheet",
  //     "offerLetter",
  //     "salarySlips",
  //     "bankStatement",
  //   ];

  //   for (let field of requiredFields) {
  //     if (!formState[field]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form is valid. Proceed to next step.");
  //   } else {
  //     alert("Please fill in all required fields.");
  //   }
  // };

  const renderFileInput = (label, name, isRequired = false) => (
    <label>
      {label}
      {isRequired && "*"}
      <div className="file-input-wrapper">
        <input type="file" name={name} onChange={handleFileChange} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="#c7c2c2"
            d="M8.462 17.173q-2.273 0-3.867-1.565Q3 14.042 3 11.778Q3 9.517 4.595 7.94t3.867-1.575h8.73q1.587 0 2.698 1.092Q21 8.548 21 10.135t-1.11 2.678q-1.111 1.09-2.698 1.09H8.923q-.88 0-1.517-.614t-.637-1.498t.627-1.52t1.527-.636h8.308v1H8.923q-.479 0-.816.327t-.338.807t.338.807t.816.328h8.289q1.165-.006 1.977-.802T20 10.135q0-1.163-.821-1.966t-1.987-.803h-8.73Q6.608 7.36 5.304 8.648T4 11.786q0 1.823 1.305 3.1t3.157 1.287h8.769v1z"
          />
        </svg>
        <span>Attach file upto 5kb</span>
      </div>
    </label>
  );

  return (
    <div className="document-collection-form-container">
      <form className="document-collection-form">
        {renderFileInput("1. 10th Marksheet", "tenthMarksheet", true)}
        {renderFileInput("2. 12th Marksheet", "twelfthMarksheet", true)}
        {renderFileInput(
          "3. Graduation Marksheet",
          "graduationMarksheet",
          true
        )}
        {renderFileInput(
          "4. Post Graduation Marksheet",
          "postGraduationMarksheet"
        )}
        {renderFileInput("5. Offer Letter", "offerLetter", true)}
        {renderFileInput("6. Salary Slips", "salarySlips", true)}
        {renderFileInput("7. Bank Statement", "bankStatement", true)}
        {renderFileInput("8. Increment Letter (if any)", "incrementLetter")}
        {renderFileInput("9. Others (if any)", "others")}
      </form>
          </div>
  );
};

export default DocumentCollectionForm;
