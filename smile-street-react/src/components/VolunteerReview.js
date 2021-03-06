import React from 'react';

const VolunteerReview = ({setForm, formData, navigation}) => {
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    password,
    employerName,
    location,
    numberOfDays,
  } = formData;
  const {go} = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>
      <h4>
        Name
        <button onClick={() => go('names')}>Edit</button>
      </h4>
      <div>
        {' '}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
      <div>e-mail: {`${email}`}</div>
      <h4>
        Address
        <button onClick={() => go('VolunteerAvailability')}>Edit</button>
      </h4>
      <div>
        Address: {`${employerName}`},
        <br />
        City: {` ${location}`},
        <br />
        State: {`${numberOfDays}`},
      </div>
      {/* <h4>
        Contact
        <button onClick={() => go('contact')}>Edit</button>
      </h4>
      <div>
        Phone: {`${phone}`},
        <br />
        E-mail: {`${email}`}
      </div>
      <div>
        <button onClick={() => go('submit')}>Submit</button>
      </div> */}
    </div>
  );
};

export default VolunteerReview;
