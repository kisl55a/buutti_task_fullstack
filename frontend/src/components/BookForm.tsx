import React from 'react';
import { Formik } from 'formik';
import BookFormFields from './forms/BookFormFields';
import { Button, Grid, styled } from '@material-ui/core';
import { usePostBook } from 'hooks/usePostBook';
import { BookProps } from './Book';
import { useFetchBook } from 'hooks/useFetchBook';
import { useDeleteBook } from 'hooks/useDeleteBook';

const StickyGrid = styled(Grid)(({ theme }) => ({
  position: 'sticky',
  top: 15,
}));
const initialFormValues = {
  id: 0,
  title: '',
  author: '',
  description: '',
};

interface Props {
  id: number;
}
export const BookForm: React.FC<Props> = ({ id }: Props) => {
  const { data: currentBookData } = useFetchBook(id === 0 ? undefined : id);
  const { mutateAsync: postBook } = usePostBook();
  const { mutateAsync: deleteBook } = useDeleteBook();
  const handleCreate = (
    values: BookProps,
    submitForm: (() => Promise<void>) & (() => Promise<any>)
  ) => {
    values.id = 0;
    submitForm();
  };
  const handleDelete = (id: number) => {
    deleteBook(id);
  };
  return (
    <Formik
      enableReinitialize
      initialValues={currentBookData?.[0] || initialFormValues}
      onSubmit={(values: BookProps) => {
        postBook(values);
      }}
    >
      {({ submitForm, values }) => {
        return (
          <StickyGrid container spacing={1}>
            <Grid item xs={12}>
              <BookFormFields />
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleCreate(values, submitForm)}
                  >
                    Save new
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    disabled={!values.id}
                    variant="outlined"
                    color="primary"
                    onClick={submitForm}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    disabled={!values.id}
                    variant="outlined"
                    color="primary"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </StickyGrid>
        );
      }}
    </Formik>
  );
};
