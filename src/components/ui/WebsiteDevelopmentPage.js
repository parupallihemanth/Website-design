import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme} from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ForwardArrow from '../../assets/forwardArrow.svg';
import BackArrow from '../../assets/backArrow.svg';
import analytics from '../../assets/analytics.svg'
import ecommerce from '../../assets/ecommerce.svg';
import outreach from '../../assets/outreach.svg';
import seo from '../../assets/seo.svg'


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
    }
}))

const WebsiteDevelopmentPage = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))
    return(
        <Grid item container >
            <Grid item container direction="row" className={classes.rowContent} justify={ matchMD ? "center" : undefined} >
                <Hidden mdDown>
                <Grid item className={classes.arrowContainer} style={{ marginRight :'1em', marginLeft :'-3.5em'}}>
                    <IconButton>
                    <img src={BackArrow} alt="Back arrow"/>
                    </IconButton>
                </Grid>
                </Hidden>
                
                <Grid item direction="column" className={classes.heading} >
                    <Typography variant="h4" align = { matchMD ? "center" : undefined} >Website development</Typography>
                    <Typography variant="body1" align = { matchMD ? "center" : undefined} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    </Typography>
                    <Typography variant="body1" align={matchSM ? "center" : undefined} paragraph>
                    Whether we're implementing old softwsre or inventing new solutions, Arc 
                    development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc 
                    </Typography>
                </Grid>
                
                    

                
                <Hidden mdDown>
                <Grid item>
                    <IconButton>
                    <img src={ForwardArrow} alt="Forward arrow"/>
                    </IconButton>
                </Grid>
                </Hidden>
                

            </Grid>

            <Grid item container direction={matchSM ? "column" : 'row'} alignItems="center" className={classes.rowContent} style={{marginTop:'15em',marginBottom:'15em'}}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item align={matchSM ? "center" : "inherit"}>
                            <Typography variant="h4"  gutterBottom>Analytics</Typography>
                        </Grid>
                        
                        <Grid item >
                            <img src={analytics}  alt="analytics" style={{ marginLeft: '-2.5em'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                        
                        
                <Grid item className={classes.paragraph}>
                            <Typography variant="body1" paragraph align={matchSM ? "center" : undefined}>
                            Whether we're implementing old softwsre or inventing new solutions, Arc 
                            development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc
                            </Typography>
                </Grid>
                        
            </Grid>

            <Grid item container direction={matchSM ? "column" : 'row'} alignItems="center" justify="flex-end" className={classes.rowContent} >
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item align={matchSM ? "center" : "inherit"}>
                            <Typography variant="h4"  gutterBottom>E-Commerce</Typography>
                        </Grid>
                        
                        <Grid item >
                            <img src={ecommerce}  alt="ecommerce" style={{ marginLeft: '-2.5em'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                        
                        
                <Grid item style={{marginLeft : matchSM ? '0em' : '1em'}} className={classes.paragraph}>
                            <Typography variant="body1" paragraph align={matchSM ? "center" : undefined}>
                            Whether we're implementing old softwsre or inventing new solutions, Arc 
                            development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc
                            </Typography>
                </Grid>
                        
            </Grid>

            <Grid item container direction={matchSM ? "column" : 'row'} alignItems="center" className={classes.rowContent} style={{marginTop:'15em',marginBottom:'15em'}}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item align={matchSM ? "center" : "inherit"}>
                            <Typography variant="h4"  gutterBottom>Outreach</Typography>
                        </Grid>
                        
                        <Grid item  >
                            <img src={outreach}  alt="outreach" style={{ marginLeft: '-2.5em'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                        
                        
                <Grid item style={{marginLeft : matchSM ? '0em' : '1em'}} className={classes.paragraph}>
                            <Typography variant="body1" paragraph align={matchSM ? "center" : undefined}>
                            Whether we're implementing old softwsre or inventing new solutions, Arc 
                            development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc
                            </Typography>
                </Grid>
                        
            </Grid>

            <Grid item container direction={matchSM ? "column" : 'row'} alignItems="center" justify="flex-end" className={classes.rowContent} style={{marginBottom:'15em'}}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item align={matchSM ? "center" : "inherit"}>
                            <Typography variant="h4"  gutterBottom>Seach Engine <br/>Optimization</Typography>
                        </Grid>
                        
                        <Grid item >
                            <img src={seo}  alt="seo" />
                        </Grid>
                    </Grid>
                </Grid>
                        
                        
                <Grid item style={{marginLeft : matchSM ? '0em' : '1em'}} className={classes.paragraph} >
                            <Typography variant="body1" paragraph align={matchSM ? "center" : undefined} >
                            Whether we're implementing old softwsre or inventing new solutions, Arc 
                            development is here to help your business tacle technology.Whether we're implementing old softwsre or inventing new solutions, Arc
                            </Typography>
                </Grid>
                        
            </Grid>

            


        </Grid>
    )
}

export default WebsiteDevelopmentPage;