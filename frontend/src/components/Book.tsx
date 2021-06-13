import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export interface BookProps {
  title: string;
  description: string;
  author: string;
  id: number;
}

const Book: React.FC<BookProps> = ({
  id,
  title,
  author,
  description,
}: BookProps) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push(`/books/${id}`);
  };
  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body1">{author}</Typography>
        <br />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Book;
