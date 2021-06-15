import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { BookProps } from 'components/Book';

const BookFormFields = (): JSX.Element => {
  const { values, handleChange, errors } = useFormikContext<BookProps>();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (values) {
        localStorage.setItem('book_form_values', JSON.stringify(values));
      }
    }, 1500);
    return () => clearTimeout(delayDebounceFn);
  }, [values]);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          label="Title"
          error={Boolean(errors?.title)}
          helperText={errors?.title}
          name="title"
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          value={values.title}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Author"
          helperText={errors?.author}
          error={Boolean(errors?.author)}
          name="author"
          onChange={handleChange}
          variant="outlined"
          required
          value={values.author}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          name="description"
          helperText={errors?.description}
          error={Boolean(errors?.description)}
          value={values.description}
          multiline
          required
          rows={4}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default BookFormFields;
