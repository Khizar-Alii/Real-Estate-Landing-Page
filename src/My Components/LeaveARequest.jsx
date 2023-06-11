import React from 'react';
import './LeaveARequest.css'

function LeaveARequest() {
  return (
    <div className="form-container">
      <h2>Get Consulting</h2>
      <form action="/">
        <div className="form-group">
          <label htmlFor="formName">Name:</label>
          <input type="text" name="name" id="formName" />
        </div>
        <div className="form-group">
          <label htmlFor="formPhone">Phone Number:</label>
          <input type="number" name="mobileNumber" id="formPhone" />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="terms" id="formTerms" />
            I agree to the processing of my personal data
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default LeaveARequest;
