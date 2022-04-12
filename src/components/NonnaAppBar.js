import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@mui/icons-material/Face';
import { useMediaQuery } from '@material-ui/core';

export default function NonnaAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FaceIcon />
            <Typography variant="h6" >
              La Nonna
            </Typography>
          </IconButton>
          <div className={classes.title}></div>
          
          { isMobile ? (
            <>
              <Button color="inherit" className={classes.menuButton}>Menu</Button>
            </>
          ) : (
            <>
              <Button color="inherit" className={classes.menuButton}>Recetas</Button>
              <Button color="inherit" className={classes.menuButton}>Categorías</Button>
              <Button className={classes.menuButtonSecondary}>Ingresar</Button>
              <Button className={classes.menuButtonSecondary}>Mi Perfil</Button>
              <Button className={classes.menuButtonPrimary}>Registrate</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

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
    marginRight: "5px",
    color: "#FF8A00",
    borderRadius: "20px",
    border: "1px solid #FF8A00",
    boxSizing: "border-box"
  },
  menuButtonPrimary: {
    backgroundColor: "#FF8A00",
    color: "#FFF",
    borderRadius: "20px",
    marginLeft: "5px",
    marginRight: "5px"
  }
}));