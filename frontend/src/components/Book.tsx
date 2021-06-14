import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
interface Props extends BookProps {
  handleBookSelect: (id: number) => void;
}

const Book: React.FC<Props> = ({
  id,
  title,
  author,
  description,
  handleBookSelect,
}: Props) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      onClick={() => {
        handleBookSelect(id);
      }}
    >
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
