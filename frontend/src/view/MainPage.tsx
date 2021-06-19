import React, { useState } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import Toolbar from 'components/Toolbar';
import { useFetchBook } from 'hooks/useFetchBook';
import { Loader } from 'components/Loader';
import Book, { BookProps } from 'components/Book';
import { BookForm } from 'components/BookForm';

const StyledHeroGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));
const StyledGridContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

const MainPage = (): JSX.Element => {
  const [currentId, setCurrentId] = useState(0);
  const handleBookSelect = (id: number) => {
    setCurrentId(id);
  };
  const {
    data: booksData,
    isLoading: isBooksLoading,
    isError: isFetchingError,
  } = useFetchBook();
  if (isFetchingError)
    return (
      <Typography variant="h3"> Errors with fetching books data</Typography>
    );
  if (isBooksLoading) return <Loader />;
  return (
    <>
      {/* TOOLBAR */}
      <Toolbar />
      {/* MAIN GRID */}
      <Grid>
        <StyledHeroGrid>
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
        </StyledHeroGrid>
        {/* BOOKS */}
        <StyledGridContainer>
          <Grid container spacing={2} wrap="wrap-reverse">
            <Grid item sm={6} xs={12}>
              <Grid container spacing={4}>
                {booksData
                  ?.map((book: BookProps, key: number) => (
                    <Grid item key={key} xs={12} sm={12} md={12}>
                      <Book handleBookSelect={handleBookSelect} {...book} />
                    </Grid>
                  ))
                  .reverse()}
              </Grid>
            </Grid>
            {/* BOOK FORM */}
            <Grid item sm={6} xs={12}>
              <BookForm id={currentId} />
            </Grid>
          </Grid>
        </StyledGridContainer>
      </Grid>
      <Footer />
    </>
  );
};

export default MainPage;
