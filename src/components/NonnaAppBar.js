import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@mui/icons-material/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    color: "#000",
    backgroundColor: "#FFF"
  },
  menuButtonSecondary: {
    marginLeft: "5px",
    marginRight: "5px"
  },
  menuButtonSecondary: {
    color: "#FF8A00",
    borderRadius: "20px",
    border: "1px solid #FF8A00",
    boxSizing: "border-box",
    marginLeft: "5px",
    marginRight: "5px"
  },
  menuButtonPrimary: {
    backgroundColor: "#FF8A00",
    color: "#FFF",
    borderRadius: "20px",
    marginLeft: "5px",
    marginRight: "5px"
  }
}));

export default function NonnaAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FaceIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            La Nonna
          </Typography>
          <Button color="inherit" className={classes.menuButton}>Recetas</Button>
          <Button color="inherit" className={classes.menuButton}>Categorías</Button>
          <Button className={classes.menuButtonSecondary}>Ingresar</Button>
          <Button className={classes.menuButtonSecondary}>Mi Perfil</Button>
          <Button className={classes.menuButtonPrimary}>Registrate</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}