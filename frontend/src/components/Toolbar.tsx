import { MenuBook } from '@material-ui/icons';
import {
  Toolbar as ToolbarComponent,
  Typography,
  AppBar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Toolbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <ToolbarComponent>
        <MenuBook className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Books
        </Typography>
      </ToolbarComponent>
    </AppBar>
  );
};

export default Toolbar;
