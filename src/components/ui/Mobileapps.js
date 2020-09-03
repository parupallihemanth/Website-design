import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';
import IconButton from '@material-ui/core/IconButton';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden'

import ForwardArrow from '../../assets/forwardArrow.svg';
import BackArrow from '../../assets/backArrow.svg';
import IntegrationAnimation from '../../animations/integrationAnimation/data.json';
import swiss from '../../assets/swissKnife.svg';
import access from '../../assets/extendAccess.svg';
import engagement from '../../assets/increaseEngagement.svg'


const useStyles = makeStyles( theme =>({
    heading :{
        maxWidth :'40em'
    },
    arrowContainer :{
        //  marginTop : '0.1em'
    },
    rowContent :{
        paddingRight : '5em',
        paddingLeft : '5em',
        // paddingTop : '2em',
        // paddingBottom : '10em',
        [ theme.breakpoints.down("sm")] : {
            paddingRight : '1.5em',
            paddingLeft : '1.5em',
            // paddingTop : '1em',
        }
    },

})

    

)

const Mobileapps = () =>{
    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))

    const integrationOptions = {
        loop: true,
        autoplay: true, 
        animationData: IntegrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <Grid item container direction="column">
             <Grid item container direction="row" className={classes.rowContent} justify={ matchMD ? "center" : undefined}>
                    <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight :'1em', marginLeft :'-3.5em'}}>
                            <IconButton 
                            component={Link} 
                            to="/customsoftware"
                            // onClick = { () => props.setSelectedIndex(0)}
                            >
                                <img alt="Backword arrow" src={BackArrow} />
                            </IconButton>
                        </Grid>
                        
                    </Hidden>
                        
                        <Grid item container direction="column" className={classes.heading}>
                                <Typography align = { matchMD ? "center" : undefined} variant="h4" >iOS/Android App Development</Typography>
                                <Typography align = { matchMD ? "center" : undefined} variant="body1"  paragraph>
                                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                                    development is here to help your business tacle technology.
                                    </Typography>
                                    <Typography  variant="body1" align={matchSM ? "center" : undefined} paragraph>
                                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                                    development is here to help your business tacle technology. 

                                    </Typography>
                                    
                        </Grid>
                        
                        <Hidden mdDown>
                        <Grid item >
                        <IconButton 
                        component={Link} 
                        to="/websites"
                        // onClick = { () => props.setSelectedIndex(2)}
                        >
                                <img alt="Forward arrow" src={ForwardArrow} />
                            </IconButton>
                        </Grid>  
                        </Hidden>
                            
                        
                </Grid>
                <Grid item container direction={matchSM ? "column" : "row" } style={{marginTop : '15em', marginBottom:'15em'}} className={classes.rowContent}>
                    <Grid item container direction="column" md>
                        <Grid item >
                            <Typography variant="h4" align={matchSM ? "center" : undefined} gutterBottom>Integration</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" align={matchSM ? "center" : undefined} paragraph>
                                Our technology enables an innate interconnection between web and mobile appilication,
                                putting everything you need right in one convenient place.
                            </Typography>
                            <Typography variant="body1" align={matchSM ? "center" : undefined} paragraph>
                            Our technology enables an innate interconnection between web and mobile appilication,
                                putting everything you need right in one convenient place.
                                
                            </Typography>
                        </Grid>

                    </Grid>


                

                <Grid item md>
                    <Lottie options={integrationOptions} style={{maxWidth :'20em'}} />
                </Grid>

                <Grid item container direction="column" md>
                        <Grid item >
                            <Typography variant="h4" gutterBottom align={matchSM ? "center" : "right"}>Simultenious platform support</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" paragraph align={matchSM ? "center" : "right"}>
                                Our technology enables an innate interconnection between web and mobile appilication,
                                putting everything you need right in one convenient place.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchSM ? "center" : "right"}>
                            Our technology enables an innate interconnection between web and mobile appilication,
                                putting everything you need right in one convenient place.
                                
                            </Typography>
                        </Grid>

                    </Grid>

            </Grid>
            <Grid item container direction={matchMD ? "column" : "row" } style ={{marginBottom:"15em"}} className={classes.rowContent} >
                <Grid item container  alignItems="center" direction="column"  md >
                    <Typography variant="h4" align="center" gutterBottom >Extended Functionality</Typography>
                    <Grid item>
                        <img  src={swiss} alt="Swiss army knife"/>
                    </Grid>
                </Grid>
                <Grid item container  alignItems="center" style ={{ marginBottom : matchMD ? "10em" : "0em", marginTop : matchMD ? "10em" : "0em"}} direction="column" md>
                    <Typography variant="h4" align="center"  gutterBottom >Extended Access</Typography>
                    <Grid item>
                        <img  src={access} alt="Extended access" style={{ maxWidth: matchSM ? '20em' : '28em'}}/>
                    </Grid>
                </Grid>
                <Grid item container  alignItems="center"  direction="column" md>
                    <Typography variant="h4" align="center" gutterBottom >Increase Engagement</Typography>
                    <Grid item>
                        <img  src={engagement} alt="Increase Engagement" />
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Mobileapps;