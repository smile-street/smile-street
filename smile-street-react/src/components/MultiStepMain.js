import React, {useState} from 'react';
import {useForm, useStep} from 'react-hooks-helper';
import Registration from './Registration/Registration';
import VolunteerAvailability from './VolunteerAvaiblity/VolunteerAvailability';
import VolunteerInterests from './VolunteerInterests/VolunteerInterests';
import VolunteerReview from './VolunteerReview';
import VolunteerSubmission from './VolunteerSubmission';
import validationSchema from './FormModel/validationSchema.js';
import FinalFormModel from './FormModel/FinalFormModel';
import useStyles from './Layout/styles';
import FormInitialValue from './FormModel/FormInitialValue';

import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import {Formik, Form} from 'formik';

const steps = ['Registration', 'Availability', 'Interests'];
const {formId, formField} = FinalFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <Registration formField={formField} />;
    case 1:
      return <VolunteerAvailability formField={formField} />;
    case 2:
      return <VolunteerReview />;
    default:
      return <div>Not Found</div>;
  }
}

export default function MultiStepMain() {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <VolunteerReview />
        ) : (
          <Formik
            initialValues={FormInitialValue}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({isSubmitting}) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Place order' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
