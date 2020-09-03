import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import CustomSoftwareIcon from '../../assets/Custom Software Icon.svg';

import MobileIcon from '../../assets/mobileIcon.svg';
import WebsiteIcon from '../../assets/websiteIcon.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTheme from '@material-ui/styles/useTheme'

const useStyle = makeStyles( theme => ({
    servicesContainer :{
        marginTop : '10em',
       //  with this style text never touches the screen
        [theme.breakpoints.down("sm")] :{
            padding :'25'
        }
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
     specialText :{
        fontFamily :'pacifico',
        color : theme.palette.common.orange
    },
    icon : {
        marginLeft : '2em',
        [theme.breakpoints.down("xs")]:{
            marginLeft :'0em'
        }
    },

}))

const Services = () =>{
    const classes = useStyle();
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    return(
        <div>
        <Grid conatiner direction="column"> 
        <Grid item style={{ marginLeft : matchSM ? 0 : '5em', marginTop : matchSM? '1em' : '2em'}} >
                <Typography variant="h2" gutterBottom align={matchSM ? "center" : undefined}>Services</Typography>
        </Grid>

        <Grid item>
        <Grid container className={classes.servicesContainer} justify ={ matchSM ? "center" : "flex-end"} direction="row" style={{marginTop : matchSM ? '1em': '5em'}}>
            <Grid text item style={{  marginLeft : matchSM ? 0 : '5em', textAlign : matchSM ? 'center' : undefined,width : matchSM ? undefined : '35em'}}>
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
                                        <Button variant="outlined" className={classes.learnButton} >Learn More</Button>
                                </Grid>
                        </Grid>
            

            </Grid>

            <Grid item style ={{ marginRight : matchSM ? 0 :'5em'}}>
                <img alt="Mobile app" src={MobileIcon} width="250em" />
            </Grid>

        </Grid>
        

    </Grid>

        <Grid container direction="row" className={classes.servicesContainer} justify ={ matchSM ? "center" : undefined} >
            <Grid item style={{  marginLeft : matchSM ? 0 : '5em', textAlign : matchSM ? 'center' : undefined,width : matchSM ? undefined : '35em'}}>
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
                                <Button variant="outlined"  className={classes.learnButton}>Learn More</Button>
                            </Grid>
                        </Grid>
                        

                    
            </Grid>

                <Grid item>
                    <img alt="custom software icon" src={CustomSoftwareIcon} className={classes.icon} width="250em" />

            </Grid>
        </Grid>

    </Grid>
    
    

    <Grid item>
        <Grid container direction="row" className={classes.servicesContainer} justify ={ matchSM ? "center" : "flex-end"} style={{marginBottom:'10em'}} >
            <Grid item style={{   textAlign : matchSM ? 'center' : undefined, width : matchSM ? undefined : '35em'}}>
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
                            <Button variant="outlined" className={classes.learnButton}>Learn More</Button>
                        </Grid>

                    </Grid>
                
            </Grid>

            <Grid item>
                <img alt="website icon" src={WebsiteIcon} style={{marginRight : matchSM ? 0 : '5em'}} className={classes.icon} width="250em" />
            </Grid>
        
        </Grid>
        
    </Grid>
    </div>
    )

}

export default Services;