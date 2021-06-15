import React from 'react';
import { MenuBook } from '@material-ui/icons';
import {
  Toolbar as ToolbarComponent,
  Typography,
  AppBar,
  Grid,
} from '@material-ui/core';

const Toolbar = (): JSX.Element => {
  return (
    <AppBar position="relative">
      <ToolbarComponent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <MenuBook />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="inherit" noWrap>
              Books
            </Typography>
          </Grid>
        </Grid>
      </ToolbarComponent>
    </AppBar>
  );
};

export default Toolbar;
