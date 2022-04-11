import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import background from "../img/landing.png";
import { Stack } from '@mui/material';
import { Container, TextField } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';


export default function NonnaHeaderLanding() {
  const classes = useStyles();

  return (
    <div className={classes.landing}>
        <Stack spacing={2}>
            <Container>
                <Typography className={classes.landingText} variant="h3">
                    Los secretos de La Nonna
                </Typography>
                <Typography className={classes.landingText} variant="h5">
                    Compartí los secretos de tu nonna
                </Typography>
            </Container>
            <Container>
                <StyledTextField fullWidth variant="outlined" label="Encontrá la receta que buscabas..." 
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton edge="end" >
                            <SearchIcon />
                          </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
            </Container>
        </Stack>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  landing: {
    height: "300px",
    backgroundImage: `url(${background})`
  },
  landingText: {
    color: "#FFF",
    borderColor: "#FFF"
  }
}));

const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiInputBase-input': {
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        fontSize: 16,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderRadius: "20px"
      },
      '&:hover fieldset': {
        borderColor: 'white',
        borderRadius: "20px"
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        borderRadius: "20px"
      },
    },
  });