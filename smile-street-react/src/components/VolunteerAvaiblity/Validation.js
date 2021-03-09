export default function Validation(values) {
  let errors = {};

  if (!values.employer_name.trim()) {
    errors.employer_name = 'Employer Name required';
  }
  return errors;
}
