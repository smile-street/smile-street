import React, {useState} from 'react';
import {useForm, useStep} from 'react-hooks-helper';
import Registration from './Registration/Registration';
import VolunteerAvailability from './VolunteerAvaiblity/VolunteerAvailability';
import VolunteerInterests from './VolunteerInterests/VolunteerInterests';
import VolunteerReview from './VolunteerReview';
import VolunteerSubmission from './VolunteerSubmission';

const MultiStepMain = () => {
  const steps = [
    {id: 'Registration'},
    {id: 'VolunteerAvailability'},
    {id: 'VolunteerInterests'},
    {id: 'VolunteerReview'},
    {id: 'VolunteerSubmission'},
  ];
  const defaultData = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'JaneDoe@Gmail.com',
    contactNumber: '12345678',
    password: '1111111',
  };

  const [formData, setForm] = useForm(defaultData);
  const {step, navigation} = useStep({initialStep: 0, steps});
  const {id} = step;

  const props = {formData, setForm, navigation};

  switch (id) {
    case 'Registration':
      return <Registration {...props} />;
    case 'VolunteerAvailability':
      return <VolunteerAvailability {...props} />;
    case 'GoodCauseOpportunity':
      return <VolunteerInterests {...props} />;
    case 'GoodCauseReview':
      return <VolunteerReview {...props} />;
    case 'GoodCauseSubmission':
      return <VolunteerSubmission {...props} />;
    default:
      return null;
  }
};

export default MultiStepMain;
