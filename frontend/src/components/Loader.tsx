import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styled, withTheme } from '@material-ui/core/styles';
import React, { memo } from 'react';

const StyledBackdrop = styled(withTheme(Backdrop))({
  zIndex: 10000,
  color: '#fff',
});
const StyledLoader = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const Loader = () => {
  return (
    <StyledBackdrop open={true}>
      <StyledLoader />
    </StyledBackdrop>
  );
};
