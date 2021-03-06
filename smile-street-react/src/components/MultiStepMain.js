import React, {useState} from 'react';
import {useForm, useStep} from 'react-hooks-helper';
import GoodCauseOpportunity from './GoodCauseOpportunity/GoodCauseOpportunity';
import Registration from './Registration/Registration';
import GoodCauseReview from './GoodCauseReview';
import GoodCauseDetails from './GoodCauseDetails/GoodCauseDetails';
import GoodCauseSubmissioon from './GoodCauseSubmission';

const MultiStepMain = () => {
  const steps = [
    {id: 'Registration'},
    {id: 'GoodCauseDetails'},
    {id: 'GoodCauseOpportunity'},
    {id: 'GoodCauseReview'},
    {id: 'GoodCauseSubmission'},
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
    case 'GoodCauseDetails':
      return <GoodCauseDetails {...props} />;
    case 'GoodCauseOpportunity':
      return <GoodCauseOpportunity {...props} />;
    case 'GoodCauseReview':
      return <GoodCauseReview {...props} />;
    case 'GoodCauseSubmission':
      return <GoodCauseSubmissioon {...props} />;
    default:
      return null;
  }
};

export default MultiStepMain;
