import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import history from '../../assets/history.svg';
import profile from  '../../assets/founder.jpg';
import yearbook from '../../assets/yearbook.svg';
import puppy from '../../assets/puppy.svg'

const useStyles = makeStyles( theme =>({
    missionStatement :{
        fontStyle : "italic",
        fontWeight : 300,
        fontSize : "1.5rem",
        maxWidth : '50em',
        lineHeight : 1.4
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
    avatar :{
        height : '25em',
        width : '25em'
    }
}))

const Aboutus = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))


    return(
        <Grid container direction="column">
            <Grid item className={classes.rowContent} direction={matchMD ? "column" : "row"} alignItems={matchMD ? "center" : undefined} style={{marginTop : '2em'}}>
                <Typography variant="h2" align={matchMD ? "center" : undefined}>About us</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContent}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                </Typography>
            </Grid>

            <Grid item container className={classes.rowContent} justify="space-around">
                {/* This grid item is for sapce-arround */}
                <Grid item>

                
                <Grid item container direction="column" lg style={{maxWidth :'25em'}}>
                <Grid item>
                    <Typography variant="h4" gutterBottom align={matchMD ? "center" : undefined} style={{marginTop : matchMD ? "2em" : '0em'}}>History</Typography>
                </Grid>
                <Grid item>
                        <Typography variant="body1" align={matchMD ? "center" : undefined} paragraph style={{fontStyle:"italic", fontWeight:700}}>
                            We're the new kid on the block
                        </Typography>
                        <Typography variant="body1" align={matchMD ? "center" : undefined} paragraph>
                        Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology
                        </Typography>
                        <Typography variant="body1" paragraph>
                        Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology
                        </Typography>
                        <Typography variant="body1" paragraph>
                        Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology
                        </Typography>
                        
                </Grid>
                </Grid>
                </Grid>
                {/* This grid item is for sapce-arround */}
                <Grid item>
                <Grid item container justify="center" lg>
                    <img src={history} alt="history" style={{ maxHeight :'22em'}}/>
                </Grid>
                </Grid>
                
            </Grid>
            <Grid item container direction="column" alignItems="center" className={classes.rowContent}>
                <Grid item>
                    <Typography variant="h4" align="center" gutterBottom style={{marginTop : matchMD ? "2em" : '0em'}}>Team</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">Zachary Reese, Founder</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">I started coding when I was 9</Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} align="center" className={classes.avatar}></Avatar>
                </Grid>
                <Grid item container>
                    <Grid item container align={matchMD ? "center" : undefined} style={{marginTop : matchMD ? "2em" : '0em'}} direction="column" lg>
                    <Hidden lgUp>
                        <Grid item lg style={{maxWidth:"45em", padding :'1.25em'}} >
                        <Typography variant="body1" align="center" paragraph >
                        Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                        Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology. 
                        </Typography>

                    </Grid>
                        </Hidden>
                        <Grid item>
                            <img src={yearbook} alt="yearbook" />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">My page</Typography>
                        </Grid>
                    </Grid>
                        
                    <Hidden mdDown>
                        <Grid item lg style={{maxWidth:"45em", padding :'1.25em'}} >
                        <Typography variant="body1" align="center" paragraph >
                        Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                        Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology. 
                        </Typography>

                    </Grid>
                        </Hidden>

                    <Grid item container direction="column" alignItems={ matchMD ? "center" : "flex-end"} lg>
                        <Grid item>
                        <img src={puppy} alt="puppy"/>

                        </Grid>
                        <Grid item>
                        <Typography variant="caption" >My puppy</Typography>

                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>
    )
    
}


export default Aboutus