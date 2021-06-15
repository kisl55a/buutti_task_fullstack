import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    cursor: 'pointer',
  },
});
const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

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
  return (
    <StyledCard
      onClick={() => {
        handleBookSelect(id);
      }}
    >
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body1">{author}</Typography>
        <br />
        <Typography variant="body2">{description}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Book;
