import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme} from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'react-lottie'
import Technology from '../../animations/technologyAnimation/data.json'

import vision from '../../assets/vision.svg'
import consultation from '../../assets/consultationIcon.svg';
import mockup from '../../assets/mockupIcon.svg';
import review from '../../assets/reviewIcon.svg';
import design from '../../assets/designIcon.svg';
import build from '../../assets/buildIcon.svg';
import launch from '../../assets/launchIcon.svg';
import maintain from '../../assets/maintainIcon.svg';
import iterate from '../../assets/iterateIcon.svg';

const useStyles = makeStyles( theme => ({
    heading : {
        maxWidth : '40em'
    },
    rowContent : {
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
    paragraph :{
        maxWidth : '30em'
    },
    consultation : {

    }
}))

const Revolution = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))

    const technologyOptions = {
        loop: true,
        autoplay: true, 
        animationData: Technology,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <Grid container direction="column"  >
           <Grid item className={classes.rowContent} style={{marginTop:'2em'}} alignItems="center">
                <Typography align = {matchMD ? "center" : undefined} variant="h2">The Revolution</Typography>
           </Grid>
        <Grid item container direction={matchMD ? "column" :"row"} style={{ marginTop :"5em"}} alignItems="center" className={classes.rowContent}>
            <Grid item lg>
                <img src={vision} alt="vision" align = {matchMD ? "center" : undefined} style={{maxWidth: matchSM ? 300 : '40em', marginRight :matchMD ? "0em" :'5em', marginBottom :matchMD ? "5em" :'0em'}} />
            </Grid>

            <Grid item container direction="column" lg style={{maxWidth:'40em'}}>
                <Grid item>
                    <Typography variant="h2" align={ matchMD ? "center" : "right"} gutterBottom>Vision</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : "right"} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : "right"}  paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : "right"} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : "right"} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>

            </Grid>

        </Grid>



        <Grid item container direction={matchMD ? "column" :"row"} style={{ marginTop :"10em", marginBottom :"10em"}} className={classes.rowContent}>
        
                
                <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg style={{maxWidth:'40em'}}>
                <Grid item>
                    <Typography variant="h2" align={ matchMD ? "center" : undefined} gutterBottom>Technology</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : undefined} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : undefined} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : undefined} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={ matchMD ? "center" : undefined}  paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                    </Typography>
                </Grid>

            </Grid>

          
                <Grid item container lg justify={matchMD ? "center" : "flex-end"}>
                    <Lottie options={technologyOptions} style={{ maxWidth : '40em', margin: 0}}/>
                </Grid>
        </Grid>

        <Grid  item container direction="row" justify="center" className={classes.rowContent}>
            <Grid item>
                    <Typography variant="h2">Process</Typography>
            </Grid>

        </Grid>
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#B3B3B3', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined} gutterBottom style={{color : "#000"}}>Consultation</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined}  style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item style={{alignSelf : "center", marginLeft:'5em'}}>
                <img src={consultation} alt="consultation"/>
            </Grid>
            
        </Grid>
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#FF7373', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined} gutterBottom style={{color : "#000"}}>Mockup</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={mockup} alt="mockup" style={{ maxWidth : 1000}}/>
            </Grid>
            
        </Grid>
        
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#39b54A', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined} gutterBottom style={{color : "#000"}}>Review</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined}  style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1"  align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={review} alt="review"/>
            </Grid>
            
        </Grid>
        
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#A67C52', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined}  gutterBottom style={{color : "#000"}}>Design</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={design} alt="design"/>
            </Grid>
            
        </Grid>
        
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#39B54A', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined} gutterBottom style={{color : "#000"}}>Review</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={review} alt="review"/>
            </Grid>
            
        </Grid>
        
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#FBB03B', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined} gutterBottom style={{color : "#000"}}>Build</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={build} alt="buld"/>
            </Grid>
            
        </Grid>
        
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#C1272D', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined} gutterBottom style={{color : "#000", marginTop:'5em'}}>Launch</Typography>
                </Grid>
                <Grid item  >   
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={launch} width="100%" alt="launch" style={{maxWidth : 200   }}/>
            </Grid>
            
        </Grid>
        
        <Grid item container direction={matchMD ? "column":"row"}  className={classes.rowContent} style={{backgroundColor:'#8E45CE', height:'90em'}} >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined} gutterBottom style={{color : "#000"}}>Maintain</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={maintain} alt="maintain" style={{maxWidth :1000}}/>
            </Grid>
            
        </Grid>
        
        <Grid item container direction={matchMD ? "column":"row"} className={classes.rowContent} style={{backgroundColor:'#29ABE2', height:'90em'}} alignItems="center" >
            <Grid item container direction="column" alignItems = {matchMD ? "center" : undefined} lg >
                <Grid item >
                    <Typography variant="h4" align={ matchMD ? "center" : undefined}  gutterBottom style={{color : "#000"}}>Iterate</Typography>
                </Grid>
                <Grid item  >
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                <Typography variant="body1" align={ matchMD ? "center" : undefined} style={{color: "#fff", maxWidth:'20em'}} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions,
                </Typography>
                </Grid>

            </Grid>
            <Grid item lg style={{alignSelf : "center"}}>
                <img src={iterate} alt="iterate" style={{maxWidth :1000}}/>
            </Grid>
            
        </Grid>
        
        
        
        
        
        </Grid>
    )
}

export default Revolution;