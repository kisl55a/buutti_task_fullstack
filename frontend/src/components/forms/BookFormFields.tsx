import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { BookProps } from 'components/Book';

const BookFormFields = () => {
  const { values, handleChange } = useFormikContext<BookProps>();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          label="Title"
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
