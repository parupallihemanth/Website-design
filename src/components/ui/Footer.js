import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Footeradornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
const useStyles = makeStyles( theme =>({
    footerStyle :{
        backgroundColor : theme.palette.common.blue,
        width : "100%",
        zIndex : 1302,
        position :'relative'
    },
    adornment : {
        width : '25em',
        verticalAlign : 'bottom',
        [theme.breakpoints.down('md')] : {
            width : '20em'
        },
        [theme.breakpoints.down('xs')] : {
            width : '15em'
        },
        
    },
    mainContainer :{
        position : 'absolute'
    },
    link :{
        color : 'white',
        fontFamily : 'Arial',
        fontSize : '0.75rem',
        fontWeight : 'bold',
        textDecoration : 'none'
    },
    gridItem :{
        margin : '3em'
    },
    icon : {
        height : '4em',
        width : '4em',
        [theme.breakpoints.down("xs")] :{
            height : '2.5em',
            width : '2.5em'
        }
    },
    socialContainer : {
        position : "absolute",
        margin : '-4.5em',
        // right :'1.5em',
        // [theme.breakpoints.down("xs")] :{
        //     right : '0.6em'
        // }
    }

}))
const Footer = (props) =>{
    const classes = useStyles();
    return(
        <footer className={classes.footerStyle} >
            <Hidden mdDown>

            <Grid container justify = 'center' className={classes.mainContainer} >
                <Grid item className={classes.gridItem}>
                    <Grid container direction = "column" spacing={2}>
                        <Grid text component={Link} to='/' onClick={ () => {props.setValue(0); props.setSelectedIndex(0)}} className={classes.link}>Home</Grid>
                    
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}> 
                        <Grid item component={Link} to='/services' onClick={ () => {props.setValue(1); props.setSelectedIndex(1)}} className={classes.link}>Services</Grid>
                        <Grid item component={Link} to='/customsoftware' onClick={ () => {props.setValue(1); props.setSelectedIndex(1)}} className={classes.link}>Custom software development</Grid>
                        <Grid item component={Link} to='/mobileapps' onClick={ () => {props.setValue(1); props.setSelectedIndex(1)}} className={classes.link}>iOS/Android App Development</Grid>
                        <Grid item component={Link} to='/websites' onClick={ () => {props.setValue(1); props.setSelectedIndex(1)}} className={classes.link}>Website development</Grid>
                    </Grid>
                    
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={ () => {props.setValue(2); props.setSelectedIndex(2)}} to='/revolution' className={classes.link}>The Revolution</Grid>
                        <Grid item component={Link} onClick={ () => {props.setValue(2); props.setSelectedIndex(2)}} to='/revolution' className={classes.link}>Vision</Grid>
                        <Grid item component={Link} onClick={ () => {props.setValue(2); props.setSelectedIndex(2)}} to='/revolution' className={classes.link}>Technology</Grid>
                        <Grid item component={Link} onClick={ () => {props.setValue(2); props.setSelectedIndex(2)}} to='/revolution' className={classes.link}>Process</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={ () => {props.setValue(3); props.setSelectedIndex(3)}} to='/about' className={classes.link}>About us</Grid>
                        <Grid item component={Link} onClick={ () => {props.setValue(3); props.setSelectedIndex(3)}} to='/about' className={classes.link}>History</Grid>
                        <Grid item component={Link} onClick={ () => {props.setValue(3); props.setSelectedIndex(3)}} to='/about' className={classes.link}>Team</Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem} >
                    <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={ () => {props.setValue(4); props.setSelectedIndex(4)}} to='/contact' className={classes.link}>Contact us</Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <img alt="footer adornment" src={Footeradornment} className={classes.adornment}></img>
            <Grid container justify="flex-end" className={classes.socialContainer} spacing={2}>
                <Grid item className={classes.icon} component = {"a"} href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                    <img src={ facebook} alt="facebook icon"  />
                </Grid>
                <Grid item className={classes.icon} component = {"a"} href="https://twitter.com" rel="noopener noreferrer" target="_blank">
                    <img src={ twitter } alt="twitter icon" />
                </Grid>
                <Grid item className={classes.icon} component = {"a"} href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                    <img src={ instagram } alt="instagram icon"  />
                </Grid>
            </Grid>
        </footer>
    )
}

export default  Footer