import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Stack } from '@mui/material';

export default function NonnaSectionTitle(props) {
  const classes = useStyles();

  return (
    <div className={classes.sectionRow}>
        <div className={classes.sectionDivider}></div>
        <Typography variant="h5" className={classes.title}>
            {props.sectionTitle}
        </Typography>
        <div className={classes.sectionDivider}></div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  sectionRow: {
    display: "flex",
    alignItems: "center",
    marginTop: "24px",
    marginBottom: "24px",
    paddingLeft: "100px",
    paddingRight: "100px",
    gap: "5px"
  },
  sectionDivider: {
    backgroundColor: "#FF8A00",
    width: "25px",
    height: "2px",
    flexGrow: 1,
    
  }
}));