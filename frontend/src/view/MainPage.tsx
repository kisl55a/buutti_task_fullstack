import React, { useState } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import Toolbar from 'components/Toolbar';
import { useFetchBook } from 'hooks/useFetchBook';
import { Loader } from 'components/Loader';
import Book, { BookProps } from 'components/Book';
import { BookForm } from 'components/BookForm';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const MainPage = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const handleBookSelect = (id: number) => {
    setCurrentId(id);
  };
  const { data: booksData, isLoading: isBooksLoading } = useFetchBook();
  if (isBooksLoading) return <Loader />;
  return (
    <>
      <Toolbar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Books collection
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Books collection frontend application
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={2} wrap="wrap-reverse">
            <Grid item sm={6} xs={12}>
              <Grid container spacing={4}>
                {booksData.map((book: BookProps, key: number) => (
                  <Grid item key={key} xs={12} sm={12} md={12}>
                    <Book handleBookSelect={handleBookSelect} {...book} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item sm={6} xs={12}>
              <BookForm id={currentId} />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
