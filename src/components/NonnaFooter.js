import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceIcon from '@mui/icons-material/Face';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function NonnaFooter() {
    const classes = useStyles();

    return (
	    <div className={classes.footer}>
	     <div className={classes.container}>
		    <div className={classes.row}>
          {/*columna 1 */}
		        <div className={classes.col}>
              <ul className={classes.list}>
			          <li href="#">Recetas para uno</li>
			          <li href="#">Recetas pa la cria</li>
			          <li href="#">Bueno bonito y barato</li>
                <li href="#">Tenes que impresionar a la mina que le dijiste{'\n'} que sos un chef pero no sabes ni hacer un huevo duro</li>
              </ul>
		        </div>
            {/*columna 2 */}
		        <div className={classes.col}>
            <ul className={classes.list}>
			        <li href="#">Almorzando con Mirtha</li>
			        <li href="#">Cenando con Mirtha</li>
			        <li href="#">Lorem Ipsum</li>
            </ul>
		        </div>
            {/*columna 3 */}
		        <div className={classes.col}>
            <ul className={classes.list}>
			        <li href="#">Aviso legal</li>
			        <li href="#">Aviso de privacidad</li>
			        <li href="#">Terminos y condiciones</li>
			        <li href="#">Cookies pero no las que se comen</li>
            </ul>
		        </div>
            {/*columna 4 */}
		        <div className={classes.col}>
            <ul className={classes.list}>
			        <li href="#">
                        <FacebookIcon />
                        Facebook
                        </li>
			        <li href="#">
                        <InstagramIcon />
                        Instagram
                        </li>
			        <li href="#">
                        <TwitterIcon />
                        Twitter
                        </li>
            </ul>
		        </div>
		    </div>
        <hr />
        <div className={classes.row}>
          <p className={classes.colsm}><FaceIcon /><Typography variant="h6" >La Nonna</Typography></p>
          </div>
	     </div>
	    </div>
    );
}
const useStyles = makeStyles(() => ({
  footer:{
    color:"grey",
    backgroundColor:"rgba(196, 196, 196,0.22)",
    paddingTop:"3em",
    position:"relative",
    bottom:"0",
    width:"100%"
  }


}));