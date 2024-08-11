import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setDob,
  setContact,
} from "../../../features/form/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.dob || !form.contact) {
      alert("All fields are required");
      return;
    }
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>1. Name*</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => dispatch(setName(e.target.value))}
            placeholder="Enter a Valid Salary in numbers e.g 50,000/-"
          />
        </div>
        <div>
          <label>2. Email*</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            placeholder="Example - userid@gmail.com"
          />
        </div>
        <div>
          <label>3. Date of Birth</label>
          <input
            type="date"
            value={form.dob}
            onChange={(e) => dispatch(setDob(e.target.value))}
          />
        </div>
        <div>
          <label>4. Contact No</label>
          <input
            type="text"
            value={form.contact}
            onChange={(e) => dispatch(setContact(e.target.value))}
            placeholder="Enter your 10 digit contact no"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
