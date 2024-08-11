import React, { useState } from "react";
import "./InterviewAvailability.css";

function InterviewAvailability() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [medium, setMedium] = useState("");

  const [emailError, setEmailError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [timezoneError, setTimezoneError] = useState("");
  const [mediumError, setMediumError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Form is valid, submit the data
      console.log("Form submitted successfully!");
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Email Validation
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Location Validation
    if (location === "") {
      setLocationError("Please enter your location.");
      isValid = false;
    } else {
      setLocationError("");
    }

    // Date Validation
    if (date === "") {
      setDateError("Please select a date.");
      isValid = false;
    } else {
      setDateError("");
    }

    // Time Validation
    if (time === "") {
      setTimeError("Please select a time.");
      isValid = false;
    } else {
      setTimeError("");
    }

    // Time Zone Validation
    if (timezone === "") {
      setTimezoneError("Please select a time zone.");
      isValid = false;
    } else {
      setTimezoneError("");
    }

    // Interview Medium Validation
    if (medium === "") {
      setMediumError("Please select a medium of interview.");
      isValid = false;
    } else {
      setMediumError("");
    }

    return isValid;
  };

  return (
    <div className="interview-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">1. Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Example - userid@gmail.com"
          />
          <span className="error">{emailError}</span>
        </div>

        <div>
          <label htmlFor="location">2. Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
            placeholder="Search or enter your location "
          />
          <span className="error">{locationError}</span>
        </div>

        <div>
          <label htmlFor="date">3. Interview Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
          <span className="error">{dateError}</span>
        </div>

        <div>
          <label htmlFor="time">4. Interview Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          />
          <span className="error">{timeError}</span>
        </div>

        <div>
          <label htmlFor="timezone">5. Time Zone</label>
          <select
            id="timezone"
            value={timezone}
            onChange={(event) => setTimezone(event.target.value)}
            required
            placeholder="Search or Select a time zone from below "
          >
            <option value="">Search or Select a time zone from below </option>
            <option value="GMT">GMT</option>
            <option value="EST">EST</option>
            <option value="PST">PST</option>
            <option value="CET">CET</option>
            <option value="IST">IST</option>
          </select>
          <span className="error">{timezoneError}</span>
        </div>

        <div>
          <label htmlFor="medium">6. Interview Medium</label>
          <select
            id="medium"
            value={medium}
            onChange={(event) => setMedium(event.target.value)}
            required
            placeholder="Search or Select medium of Interview from below"
          >
            <option value="">Search or Select medium of Interview from below</option>
            <option value="Phone">Phone</option>
            <option value="Video Call">Video Call</option>
            <option value="In-Person">In-Person</option>
          </select>
          <span className="error">{mediumError}</span>
        </div>
      </form>
    </div>
  );
}

export default InterviewAvailability;
