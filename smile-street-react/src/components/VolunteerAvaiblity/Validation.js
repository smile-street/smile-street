export default function Validation(values) {
  let errors = {};

  if (!values.employer_name.trim()) {
    errors.employer_name = 'This field is required';
  }
  return errors;
}
