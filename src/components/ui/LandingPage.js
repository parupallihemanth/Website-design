import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom'
import animationData from '../../animations/landinganimation/data'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import CustomSoftwareIcon from '../../assets/Custom Software Icon.svg';
import MobileIcon from '../../assets/mobileIcon.svg';
import WebsiteIcon from '../../assets/websiteIcon.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CallToAction from './CallToAction'

import RevolutionBackground from '../../assets/repeatingBackground.svg';
import InfoBackground from '../../assets/infoBackground.svg'
const useStyles = makeStyles( theme =>({
 animation : {
     maxWidth : '50em',
     minWidth : '21em',
     marginTop : '2em',
     marginLeft : '10px'
 },
 specialText :{
     fontFamily :'pacifico',
     color : theme.palette.common.orange
 },
 learnButton : {
    ...theme.typography.learnButton,
    fontSize: "0.9em",
    height : 35,
    // padding : 5,
    [ theme.breakpoints.down("sm")] :{
        marginBottom :'2em'
    }

 },
 subtitle :{
     marginBottom : '1em',

 },
 icon : {
     marginLeft : '2em',
     [theme.breakpoints.down("xs")]:{
         marginLeft :'0em'
     }
 },
 servicesContainer :{
     marginTop : '12em',
    //  with this style text never touches the screen
     [theme.breakpoints.down("sm")] :{
         padding :'25'
     }
 },
 revolutionBackground : {
     backgroundImage : `url(${RevolutionBackground})`,
     backgroundPosition : "center",
     backgroundSize : "cover",
     backgroundRepeat : "no-repeat",
     height : "100%",
     width : '100%'
 },
 cardStyling : {
     position :'absolute',
     boxShadow :theme.shadows[10],
     borderRadius : 15,
    padding : '10em',
    [theme.breakpoints.down("sm")] :{
        paddingTop : '8em',
        paddingBottom : '8em',
        paddingLeft : '0',
        paddingRight : '0',
        borderRadius : '0',
        width : '100%'
    }
 },
 infoBackground :{
     backgroundImage : `url(${InfoBackground})`,
     backgroundRepeat :'no-repeat',
     backgroundSize : "cover",
     backgroundPosition : "center",
     height : "100%",
     width : '100%'
     

 },
 infoContent :{
     position : 'absolute',
     marginLeft : '5em'
 }
}))

const LandingPage = (props) =>{
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))

    // From react lottie documentation
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return(
        <Grid container direction="column" >
            {/* Hero section */}
            <Grid item>
                <Grid container alignItems="center" justify="flex-end" direction="row">
                    <Grid sm item >
                        <Typography variant="h2" >Bringing west cost technology <br /> to the mid east</Typography>
                    
                    <Grid container>
                        <Grid item>
                        <Button variant="contained" component={Link} to="/estimate">Free Estimate</Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" component={Link} to="/revolution">Learn more</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height="100%" width="100%"/>
                        
                    </Grid>
                </Grid>
            </Grid>
            {/* --------Services section------- */}
            {/* Custom software */}
            <Grid item> 
                <Grid container direction="row" className={classes.servicesContainer} justify ={ matchSM ? "center" : undefined} >
                    <Grid item style={{  marginLeft : matchSM ? 0 : '5em', textAlign : matchSM ? 'center' : undefined}}>
                        <Typography variant="h4">
                                Custom Software Development<br />
                        </Typography> 
                        <Typography variant="subtitle1" className={classes.subtitle}>
                                Save Energy. Save Time. Save Money<br />
                        </Typography>   
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                        Complete digital solutions, from Investigation to { ""}
                                        <span className={classes.specialText}>celebration.</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" component={Link} to="/customsoftware" onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} className={classes.learnButton}>Learn More</Button>
                                    </Grid>
                                </Grid>
                                

                            
                    </Grid>

                        <Grid item>
                            <img alt="custom software icon" src={CustomSoftwareIcon} className={classes.icon} />

                    </Grid>
                </Grid>

            </Grid>

            <Grid item>
                <Grid container className={classes.servicesContainer} justify ={ matchSM ? "center" : "flex-end"} direction="row">
                    <Grid text item style={{  marginLeft : matchSM ? 0 : '5em', textAlign : matchSM ? 'center' : undefined}}>
                        <Typography variant="h4">
                                    iOS/Android App Development<br />
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >

                                    Extended Functionality. Extended Access. Increase Engagement<br />
                        </Typography>            
                                <Grid container direction="column">
                                        <Grid item>
                                        <Typography variant="subtitle1">
                                                Integrate your web experience or create a standalone app{matchSM ? null :<br />}
                                                with either mobile platform.
                                        </Typography> 
                                            </Grid>
                                        <Grid item>
                                                <Button variant="outlined" component={Link} to="/mobileapps" onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}  className={classes.learnButton} >Learn More</Button>
                                        </Grid>
                                </Grid>
                    

                    </Grid>

                    <Grid item style ={{ marginRight : matchSM ? 0 :'5em'}}>
                        <img alt="Mobile app" src={MobileIcon} />
                    </Grid>

                </Grid>
                

            </Grid>

            <Grid item>
                <Grid container direction="row" className={classes.servicesContainer} justify ={ matchSM ? "center" : undefined} >
                    <Grid item style={{  marginLeft : matchSM ? 0 : '5em', textAlign : matchSM ? 'center' : undefined}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>    
                        <Typography variant="subtitle1" className={classes.subtitle}>

                            Reach More. Discover More. Sell More
                        </Typography>
                            <Grid container direction="column">
                                <Grid item>
                                <Typography variant="subtitle1">
                                    Optimixed for Search Engines,<br />built for speed
                                </Typography > 
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" component={Link} to="/websites" onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}  className={classes.learnButton}>Learn More</Button>
                                </Grid>

                            </Grid>
                        
                    </Grid>

                    <Grid item>
                        <img alt="website icon" src={WebsiteIcon} className={classes.icon} />
                    </Grid>
                
                </Grid>
                
            </Grid>

            <Grid item>
                <Grid container justify="center" alignItems="center" style={{ height :'100em', marginTop:'12em'}}>
                <Card className={classes.cardStyling}>
                    <CardContent>
                         <Grid container direction="column" style={{ textAlign:"center"}}>
                            <Grid item>
                                <Typography variant="h3" gutterBottom >The Revolution</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    Visionary insights coupled with cutting-edge technology is a recipe 
                                    for revolution
                                </Typography>
                                <Button variant="outlined" className={classes.learnButton}>Learn More</Button>
                            </Grid>

                        </Grid> 
                    </CardContent>
                </Card>
                <img alt="revolution background" src={RevolutionBackground} onClick={() => {props.setValue(2)}} className={classes.revolutionBackground}/>
                </Grid>
                

                

            </Grid>
            

            <Grid item>
                
                <Grid container style={{ height:'80em'}}  alignItems="center" >
                    <Grid container style={{ position:"absolute", textAlign: matchXS ? "center" : "inherit"}} direction= {matchXS ? "column" : "row"} spacing = {matchXS ? 10 : 0} >
                    <Grid item sm style={{   marginLeft: matchXS ? 0 : matchSM  ? "2em" : "5em"}}> 
                    <Grid container direction="column">
                        <Grid item >
                        <Typography variant="h2" style={{ color :'white'}} onClick={() => {props.setValue(3)}}>About Us</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="subtitle2">Let's get Personal</Typography>
                        <Button variant="outlined">Learn More</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    
                    <Grid item > 
                    <Grid container direction="column" justify="flex-end" > 
                        <Grid item sm style={{ marginRight: matchXS ? 0 : matchSM  ? "2em" : "5em", textAlign: matchXS ? "center" :"right"}}>
                        <Typography variant="h2" style={{ color :'white'}} onClick={() => {props.setValue(4)}}>Contact Us</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="subtitle2">Say hello!</Typography>
                        <Button variant="outlined">Learn More</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    </Grid>
                    
                    
                    
                    <div className={classes.infoBackground}></div>

                </Grid>

            </Grid>
            <Grid item>
                    <CallToAction />
            </Grid>

        </Grid>
    )
}

export default LandingPage;