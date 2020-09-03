import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden'
import CallToAction from '../ui/CallToAction'

import ForwardArrow from '../../assets/forwardArrow.svg';
import BackArrow from '../../assets/backArrow.svg';
import bulb from '../../assets/bulb.svg';
import cash from  '../../assets/cash.svg';
import stopWatch from '../../assets/stopwatch.svg';
import root from '../../assets/root.svg'

import documentAnimation from '../../animations/documentsAnimation/data.js'
import scaleAnimation from '../../animations/scaleAnimation/data.json';
import automationAnimation from '../../animations/automationAnimation/data.json'
import uxAnimation from '../../animations/uxAnimation/data.js'

const useStyles = makeStyles( theme => ({

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
    itemContainer :{
        maxWidth : '40em',
        // marginTop : '10em'
    }
}))

const CustomSoftware = (props) =>{
 const classes = useStyles();
 const theme = useTheme();

 const matchMD = useMediaQuery(theme.breakpoints.down('md'))
 const matchSM = useMediaQuery(theme.breakpoints.down("sm"))

 const documentOptions = {
    loop: true,
    autoplay: true, 
    animationData: documentAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const scaleOptions = {
    loop: true,
    autoplay: true, 
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const automationOptions = {
    loop: true,
    autoplay: true, 
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const UXOptions = {
    loop: true,
    autoplay: true, 
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

    return(
        <Grid container direction="column" >
            
                <Grid item container direction="row" className={classes.rowContent} justify={ matchMD ? "center" : undefined}>
                    <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight :'1em', marginLeft :'-3.5em'}}>
                            <IconButton 
                            component={Link} 
                            to="services"
                            // onClick = { () => props.setSelectedIndex(0)}
                            >
                                <img alt="Backword arrow" src={BackArrow} />
                            </IconButton>
                        </Grid>
                        
                    </Hidden>
                        
                        <Grid item container direction="column" className={classes.heading}>
                                <Typography align = { matchMD ? "center" : undefined} variant="h4" >Custom Software development</Typography>
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
                        to="/mobileapps"
                        // onClick = { () => props.setSelectedIndex(2)}
                        >
                                <img alt="Forward arrow" src={ForwardArrow} />
                            </IconButton>
                        </Grid>  
                        </Hidden>
                            
                        
                </Grid>

                <Grid container direction="row" className={classes.rowContent}  justify="center" style={{ marginTop :'15em',marginButtom :'15em'}}>
                    <Grid item container direction="column" md style={{maxWidth:'40em'}} alignItems="center">
                        <Grid item>
                            <Typography variant="h4">Save Energy</Typography>
                        </Grid>
                        <Grid item>
                            <img   src={bulb}  alt="bulb"/>
                        </Grid>

                    </Grid>
                    <Grid item container direction="column" md style={{maxWidth:'40em', marginTop :  matchSM ? "10em" : '0em', marginBottom :  matchSM ? "10em" : '0em' }} alignItems="center">
                        <Grid item>
                            <Typography variant="h4">Save Time</Typography>
                        </Grid>
                        <Grid item>
                            <img  alt="watch" src={stopWatch}/>
                        </Grid>

                    </Grid>
                    <Grid item container direction="column" md style={{maxWidth:'40em'}} alignItems="center">
                        <Grid item>
                            <Typography variant="h4">Save Money</Typography>
                        </Grid>
                        <Grid item>
                            <img  alt="cash" src={cash} />
                        </Grid>

                    </Grid>

                </Grid>
                <Grid container direction= { matchMD ? "column" : "row"} align = { matchMD ? "center" : undefined} justify="space-around" style={{ marginTop:"20em"}}>
                    <Grid item container className={classes.itemContainer} style={ {marginBottom : matchMD ? '15em' : '0em'}} className={classes.rowContent}  direction ={matchSM ? "column" : "row"} md>
                        <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchSM ? "center" : undefined}>Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" align={matchSM ? "center" : undefined} paragraph>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" align={matchSM ? "center" : undefined} paragraph>
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs.
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" align={matchSM ? "center" : undefined} paragraph>
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item  md>
                        <Lottie options={documentOptions} isStopped={true} style={{ maxHeight:275, maxWidth:275, minHeight:250}}/>

                    </Grid>
                    </Grid>


                    <Grid item container className={classes.itemContainer} direction ={matchSM ? "column" : "row"} md>
                    <Grid item  md>
                        <Lottie options={scaleOptions} isStopped={true} style={{ maxHeight:260, maxWidth:280}} />

                    </Grid>
                        <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4"  align={matchSM ? "center" : "right"}>Scale</Typography>
                        </Grid>
                        
                            
                        <Grid item >
                            <Typography variant="body1" align={matchSM ? "center" : "right"} paragraph>
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs.
                            </Typography>
                        </Grid>
                        

                    </Grid>

                    
                    
                    </Grid>
                    
                    
                    
                    

                </Grid>

                <Grid item container direction="row" className={classes.rowContent}  style={{ marginTop:"20em", marginBottom:"20em"}}>
                    <Grid item container direction="column" alignItems="center" >
                        <Grid item>
                            <img  src={root} alt="root-cause" height= { matchSM ? "300em" : "450em"} width={ matchSM ? "300em" : "450em"}/>
                        </Grid>
                        <Grid item className={classes.itemContainer}>
                            <Typography variant="h4" align="center">Root-cause analysis</Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Many problems are merly symptoms of large, underlying issues
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                We  help you througly examin all areas of your business to develop a 
                                holistic plan for the most effective implementations of technology
                            </Typography>

                        </Grid>

                    </Grid>

                </Grid>
                
            
                <Grid container direction= { matchMD ? "column" : "row"}  className={classes.rowContent} align = { matchMD ? "center" : undefined} justify="space-around" style={{marginButtom:"10em"}}>
                    <Grid item container className={classes.itemContainer} style={ {marginBottom : matchMD ? '15em' : '0em'}} direction ={matchSM ? "column" : "row"} md>
                        <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchSM ? "center" : undefined}>Automation</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" paragraph align={matchSM ? "center" : undefined}>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" paragraph align={matchSM ? "center" : undefined}>
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs.
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="body1" paragraph align={matchSM ? "center" : undefined}>
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs
                            </Typography>
                        </Grid>

                    </Grid>

                    <Grid item md>
                        <Lottie options={automationOptions} isStopped={true} style={{ maxHeight:290, maxWidth:280}}  />

                    </Grid>
                    </Grid>


                    <Grid item container className={classes.itemContainer} className={classes.rowContent} direction ={matchSM ? "column" : "row"} md>
                    <Grid item  md>
                        <Lottie options={UXOptions} isStopped={true} style={{ maxHeight:310, maxWidth:155}}/>

                    </Grid>
                        <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchSM ? "center" : "right"}>User experience design</Typography>
                        </Grid>
                        
                            
                        <Grid item >
                            <Typography variant="body1" align={matchSM ? "center" : "right"} paragraph>
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs
                            Reduce Errors Reduce Waste Reduce Costs Reduce Errors Reduce Waste Reduce Costs.
                            </Typography>
                        </Grid>
                        

                    </Grid>

                    
                    
                    </Grid>
                    
                    
                    <Grid item>
                        <CallToAction />
                    </Grid>
                    

                </Grid>


        </Grid>
    )

}

export default CustomSoftware;