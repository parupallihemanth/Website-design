import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/styles';
const useStyles = makeStyles( theme => ({

    learnButton : {
        ...theme.typography.learnButton,
    },
    calltoactionBackground :{
        backgroundImage : `url(${background})`,
        backgroundPosition :'center',
        backgroundRepeat :'no-repeat',
        backgroundAttachment : 'fixed',
        backgroundSize :'cover',
        height : "60em",
        width : '100%',
        [theme.breakpoints.down("md")] :{
            backgroundImage : `url(${mobileBackground})`,
        backgroundAttachment : 'inherit',

        }
    },
    estimate :{
        // ...theme.typography.estimate,
        background : theme.palette.common.orange,
        borderRadius : "50px",
        fontSize: "15px",
        textTransform : "none",
        marginLeft : "50px",
        marginRight : "25px",
        height:"45px",
        color : "white",
        // marginRight : '5em',
         marginLeft :'2em',
         [theme.breakpoints.down("sm")] :{
             marginTop : '2em',
             marginLeft : '5em',
             marginRight : '0'
         }
        
    }


}))

const CallToAction = () =>{
 const classes = useStyles();
 const theme = useTheme();
 const mathchSM = useMediaQuery(theme.breakpoints.down("sm"))

return( 
        // For personal projects 
        // <Grid container direction="row" style={{ height:'60em'}} alignItems="center">
        //     <Grid item style={{ position :'absolute', marginLeft:" 5em"}}>
        //         <Grid container direction="column" >
        //             <Grid item >
        //                 <Typography variant="h2">Simple software. <br />Revolutionary Results.</Typography>
        //                 <Typography variant="subtitle2" style={{fontSize :'1.5em'}}>Take advantage of the 21st century</Typography>
        //             {/* </Grid> */}
        //             <Grid container  item>
        //                 <Button variant="outlined" className={classes.learnButton}>Learn more</Button>
        //             </Grid>
        //         </Grid>
        //         </Grid>
        //     </Grid>
        //     <Grid item>
        //         <Button variant="contained" className={classes.estimate}>Free Estimate</Button>
        //     </Grid>
        //     <div className={classes.calltoactionBackground}></div>
        // </Grid>
        <Grid container direction="row" 
        // style={{ height:'60em'}} 
        alignItems="center" 
        className={classes.calltoactionBackground} 
        direction = { mathchSM ? 'column' : 'row'}
        // justify="space-between"
        justify = { mathchSM ? 'center' : 'space-between'}
        >
             <Grid item style={{  marginLeft:" 5em", textAlign : mathchSM ? "center" : "inherit"}}>
                 <Grid container direction="column"  >
                     <Grid item >
                        <Typography variant="h2">Simple software. <br />Revolutionary Results.</Typography>
                        <Typography variant="subtitle2" style={{fontSize :'1.5em'}}>Take advantage of the 21st century</Typography>
                    {/* </Grid> */}
                    <Grid container justify={mathchSM ? "center" : undefined} item>
                       <Button variant="outlined" className={classes.learnButton}>Learn more</Button>
                    </Grid>
             </Grid>
                </Grid>
             </Grid>
             <Grid item>
                 <Button variant="contained" className={classes.estimate}>Free Estimate</Button>
             </Grid>
             {/* <div ></div> */}
         </Grid>
    )
}

export default CallToAction;
