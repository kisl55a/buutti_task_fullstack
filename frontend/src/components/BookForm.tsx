import React from 'react';
import { Formik } from 'formik';
import BookFormFields from './forms/BookFormFields';
import { Button, Grid, styled, Paper } from '@material-ui/core';
import { usePostBook } from 'hooks/usePostBook';
import { BookProps } from './Book';
import { useFetchBook } from 'hooks/useFetchBook';
import { useDeleteBook } from 'hooks/useDeleteBook';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';

const StickyPaper = styled(Paper)(({ theme }) => ({
  position: 'sticky',
  top: 15,
  padding: theme.spacing(1),
  marginTop: theme.spacing(0.1),
}));
const initialFormValues = {
  id: 0,
  title: '',
  author: '',
  description: '',
};

const bookFormValidationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
});

interface Props {
  id: number;
}
export const BookForm: React.FC<Props> = ({ id }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const { data: currentBookData, isLoading: isBookLoading } = useFetchBook(
    id === 0 ? undefined : id
  );
  const { mutateAsync: postBook } = usePostBook({
    onSuccess: () =>
      enqueueSnackbar('Successfully posted', { variant: 'success' }),
    onError: () => enqueueSnackbar('Error while posting', { variant: 'error' }),
  });
  const { mutateAsync: deleteBook } = useDeleteBook({
    onSuccess: () =>
      enqueueSnackbar('Successfully deleted', { variant: 'success' }),
    onError: () =>
      enqueueSnackbar('Error while deleting', { variant: 'error' }),
  });

  const handleEdit = (
    submitForm: (() => Promise<void>) & (() => Promise<any>)
  ) => {
    submitForm();
  };
  const handleCreate = async (
    submitForm: (() => Promise<void>) & (() => Promise<any>),
    values: BookProps
  ) => {
    values.id = 0;
    submitForm();
  };
  const handleDelete = (id: number) => {
    deleteBook(id);
  };

  return (
    <StickyPaper>
      <Formik
        enableReinitialize
        initialValues={id !== 0 ? currentBookData?.[0] : initialFormValues}
        validationSchema={bookFormValidationSchema}
        onSubmit={(values: BookProps) => {
          postBook(values);
        }}
      >
        {({ submitForm, values }) => {
          return (
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <BookFormFields isLoading={isBookLoading} />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleCreate(submitForm, values)}
                    >
                      Save new
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disabled={!values?.id}
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(submitForm)}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disabled={!values?.id}
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </StickyPaper>
  );
};
