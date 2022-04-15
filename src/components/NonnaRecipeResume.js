import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';
import { Rating, Stack } from '@mui/material';
import vegan from "../img/vegan.png";
import celiac from "../img/celiac.png";

export default function NonnaRecipeResume(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.root}>
            <div className={classes.recipeImage}>
                <img url={require(`../img/${props.image}.png`)} height="100px" width="100px" />
            </div>
            <div>
                <Stack spacing={2}>
                    <Typography variant="h4" className={classes.boldText}>
                        {props.recipeTitle}
                    </Typography>
                    <Typography className={classes.landingTitle} variant="subtitle1">
                        {props.recipeDescription}
                    </Typography>
                    <div className={classes.ratings}>
                        <div className={classes.rating}>
                            <Typography variant="body1" className={classes.boldText}>
                                Calificación:
                            </Typography>
                            <Rating value={props.rating} readOnly></Rating>
                        </div>
                        <div className={classes.rating}>
                            <Typography variant="body1" className={classes.boldText}>
                                Dificultad:
                            </Typography>
                            <Typography variant="body1">
                                {props.dificulty}
                            </Typography>
                        </div>

                        {props.vegan == true ?
                            <div className={classes.rating}>
                                <Typography variant="body1" className={classes.boldText}>
                                    Apto vegano:
                                </Typography>
                                <img url={vegan} width="23px" height="23px" />
                            </div>
                            : <>
                            </>
                        }

                        {props.celiac == true ?
                            <div className={classes.rating}>
                                <Typography variant="body1" className={classes.boldText}>
                                    Apto celíaco:
                                </Typography>
                                <img url={celiac} width="23px" height="23px" />
                            </div>
                            : <>
                            </>
                        }
                    </div>
                </Stack>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingBottom: "50px"
    },
    recipeImage: {
        marginRight: "40px"
    },
    ratings: {
        display: "flex",
        gap: 25
    },
    boldText: {
        fontWeight: 700
    },
    rating: {
        display: "flex",
        gap: 5
    },
}));