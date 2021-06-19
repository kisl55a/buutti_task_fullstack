import React from 'react';
import TextField from '@material-ui/core/TextField';
import { CircularProgress, Grid, InputAdornment } from '@material-ui/core';
import { useFormikContext } from 'formik';
import { BookProps } from 'components/Book';

interface BookFieldsProps {
  isLoading: boolean;
}

const BookFormFields: React.FC<BookFieldsProps> = ({
  isLoading,
}: BookFieldsProps) => {
  const { values, handleChange, errors } = useFormikContext<BookProps>();
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
          InputProps={{
            startAdornment: isLoading && (
              <InputAdornment position="start">
                <CircularProgress size={20} />
              </InputAdornment>
            ),
          }}
          required
          value={values?.title}
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
          InputProps={{
            startAdornment: isLoading && (
              <InputAdornment position="start">
                <CircularProgress size={20} />
              </InputAdornment>
            ),
          }}
          value={values?.author}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Description"
          name="description"
          helperText={errors?.description}
          error={Boolean(errors?.description)}
          value={values?.description}
          multiline
          required
          rows={4}
          InputProps={{
            startAdornment: isLoading && (
              <InputAdornment position="start">
                <CircularProgress size={20} />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default BookFormFields;
