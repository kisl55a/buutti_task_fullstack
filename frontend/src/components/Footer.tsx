import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dmitrii Kislenko
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const StyledFooterGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6),
}));

const Footer = (): JSX.Element => {
  return (
    <StyledFooterGrid>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        The best book app ever
      </Typography>
      <Copyright />
    </StyledFooterGrid>
  );
};

export default Footer;
