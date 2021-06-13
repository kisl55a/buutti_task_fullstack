import React from 'react';
import { Formik } from 'formik';
import BookFormFields from './forms/BookFormFields';
import { Button, Grid } from '@material-ui/core';
import { usePostBook } from 'hooks/usePostBook';
import { BookProps } from './Book';

const initialFormValues = {
  id: 0,
  title: '',
  author: '',
  description: '',
};

interface Props {
  id?: number;
}
export const BookForm: React.FC<Props> = ({ id }: Props) => {
  const { mutateAsync: postBook } = usePostBook();
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values: BookProps) => {
        postBook(values);
      }}
    >
      {({ submitForm }) => (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <BookFormFields />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={submitForm}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};
