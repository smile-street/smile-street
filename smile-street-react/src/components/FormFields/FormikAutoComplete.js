import React from 'react';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import {fieldToTextField} from 'formik-material-ui';

export default function FormikAutoComplete({textFieldProps, ...props}) {
  const {
    form: {setTouched, setFieldValue},
  } = props;
  const {error, helperText, ...field} = fieldToTextField(props);
  const {name} = field;

  return (
    <Autocomplete
      {...props}
      {...field}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({[name]: true})}
      renderInput={(props) => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
