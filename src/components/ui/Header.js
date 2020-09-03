import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Topography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/styles';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
    const { children } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


  const useStyles = makeStyles(theme =>({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        margin : "2em",
        [theme.breakpoints.down('md')] : {
            margin : "1em"
        },
        [theme.breakpoints.down('xs')] : {
            margin : "1em"
        },
    },

    logo :{
        height : "8em",
        [theme.breakpoints.down('md')] : {
            height : "7em"
        },
        [theme.breakpoints.down('xs')] : {
            height : "6em"
        },
        "&:hover" :{
            backgroundColor : "transperent"
        }
    },
    tabsContainer:{
        marginLeft : "auto",
    },
    tab:{
        textTransform : "none",
        fontWeight : 700,
        fontSize : "1rem",
        minWidth : 10,
        marginLeft : "25px"
    },
    button :{
        borderRadius : "50px",
        fontSize: "15px",
        textTransform : "none",
        marginLeft : "50px",
        marginRight : "25px",
        height:"45px",
        color : "white"
    },
    logoContainer : {
        padding :0,
        
    },
    menu : {
        backgroundColor : theme.palette.common.blue,
        color : 'white',
         borderRadius : '0px'

    },

    menuItem : {
        // ...theme.typography.tab,
        textTransform : "none",
        fontWeight : 700,
        fontSize : "1rem",
        color : "white",
        opacity : 0.7,
        "&:hover" : {
            opacity : 1
        }
    },
    drawerIconContainer :{
        marginLeft : 'auto',

    },
    drawerIcon : {
        height : '50px',
        width : '50px'
    },
    drawer : {
        backgroundColor : theme.palette.common.blue
    },
    drawerItem : {
        ...theme.typography.tab,
        color : 'white'
    },
    drawerEstimate :{
        backgroundColor : theme.palette.common.orange
    },
    appBar : {
        zIndex: theme.zIndex.modal + 1
    }
    

}
    ))
  

const Header = ( props ) =>{
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const [openDrawer, setOpenDrawer] = useState(false)
    // const [ value, setValue ] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [ open, setOpen ] = useState(false);
    // const [selectedIndex, setSelectedIndex] = useState(0)

    const handleChange = (event, newvalue) =>{
        props.setValue(newvalue);
    }

    const handleClick = ( event ) =>{
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleMenuItemClick = ( e, i) =>{
        setAnchorEl(null)
        setOpen(false)
        props.setSelectedIndex(i)
    }
    const handleClose = ( event ) =>{
        setAnchorEl(null)
        setOpen(false)
    }

    const menuItemOptions = [{ "name" : "Services", link:"/services"}, { "name" : " Custom software development", link:"/customsoftware"},
    {"name" : " iOS/Android app development", link:"/mobileapps"}, {"name":"Website development", link:"/websites"}
    ]
 useEffect ( () =>{
     if(window.location.pathname === '/' && props.value !== 0){
         props.setValue(0)
     }
     else if( window.location.pathname === '/services' && props.value !== 1){
         props.setValue(1)
     }
     else if ( window.location.pathname ==='/revolution' && props.value !==2){
         props.setValue(2)
     }
     else if ( window.location.pathname === '/about' && props.value !== 3){
         props.setValue(3)
     }
     else if ( window.location.pathname === '/contact' && props.value !== 4){
        props.setValue(4)
    }
    else if ( window.location.pathname === '/estimate' && props.value !== 5){
        props.setValue(5)
    }
    switch ( window.location.pathname){
        case "/":
            if(props.value !==0){
                props.setValue(0)
                
            }
            break;
        case "/services" : 
            if( props.value !== 1){
                props.setValue(1)
                props.setSelectedIndex(0)
                
            }
            break;
        case "/customsoftware":
            if( props.value !==1){
                props.setValue(1)
                props.setSelectedIndex(1)
                
            }
            break;
        case "/mobileapps":
            if( props.value !== 1){
                props.setValue(1)
                props.setSelectedIndex(2)
                
            }
            break;
            case "/websites":
            if( props.value !== 1){
                props.setValue(1)
                props.setSelectedIndex(3)
                
            }
            break;
            case "/revolution" :
                if( props.value !==2){
                    props.setValue(2)
                    
                }
                break;
            case "/about" :
                if( props.value !==3){
                    props.setValue(3)
                    
                }
                break;
            case "/contact" :
                if( props.value !==4){
                    props.setValue(4)
                    
                }
                break
            case "/estimate" : 
                if( props.value !==5){
                    props.setValue(5)
                    
                }
                break
            default:
                break;
        
    }
 },[props.value, props])

    const tabs = (
        <React.Fragment>
            <Tabs value={ props.value } onChange={handleChange} className={classes.tabsContainer}>
                    <Tab className = {classes.tab} component={Link} to='/' label="Home" />
                    

                    <Tab 
                    aria-owns = { anchorEl ? 'simple-menu' : undefined }
                    aria-haspopup = { anchorEl ? 'true' : undefined }
                    className = {classes.tab} 
                    component={Link} 
                    onMouseMove = {event => handleClick(event)}
                    to='/services' 

                    label="Services" />

                    
                    
                    <Tab className = {classes.tab} component={Link} to='/revolution' label=" The revolution" />
                    <Tab className = {classes.tab} component={Link} to='/about' label="About us" />
                    <Tab className = {classes.tab} component={Link} to='/contact' label="Contact us" />
                    
                </Tabs>
                <Button 
                variant="contained"  
                color="secondary"
                component ={Link} 
                to = '/estimate'
                onClick ={() => props.setValue(5)}
                className={classes.button}>Free estimate</Button>

                <Menu id='simple-menu' 
                anchorEl={anchorEl} 
                open={open}
                onClose={handleClose}
                classes ={{ paper : classes.menu}}
                MenuListProps = {{onMouseLeave: handleClose}}
                elevation = {0}
                style = {{ zIndex : 1302}}
                keepMounted
                >
                    { menuItemOptions.map( (option, i) => (
                        <MenuItem
                        key={i}
                        component = {Link}
                        to={option.link}
                        classes = { { root : classes.menuItem}}
                        onClick={ (event) => {handleMenuItemClick(event,i); props.setValue(1);
                        handleClose()}} selected={ i === props.selectedIndex && props.value === 1 }
                        >{option.name}</MenuItem>
                    ))}
                </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            classes ={{ paper : classes.drawer}}
            >
            <div className={classes.toolbarMargin} />

              <List disablePadding>
                  <ListItem onClick ={() =>setOpenDrawer(false)} divider button component={Link} to='/'>
                      <ListItemText
                      className={classes.drawerItem}
                      >Home</ListItemText>
                  </ListItem>
                  <ListItem onClick ={() =>setOpenDrawer(false)}  divider button component={Link} to='/services'>
                      <ListItemText
                      className={classes.drawerItem}
                      >Services</ListItemText>
                  </ListItem>
                  <ListItem onClick ={() =>setOpenDrawer(false)}  divider button component={Link} to='/revolution'>
                      <ListItemText
                      className={classes.drawerItem}
                      >The revolution</ListItemText>
                  </ListItem>
                  <ListItem onClick ={() =>setOpenDrawer(false)} divider button component={Link} to='/contact'>
                      <ListItemText
                      className={classes.drawerItem}
                      >Contact us</ListItemText>
                  </ListItem>
                  <ListItem onClick ={() =>setOpenDrawer(false)} divider button component={Link} to='/about'>
                      <ListItemText
                      className={classes.drawerItem}
                      >About us</ListItemText>
                  </ListItem>
                  <ListItem 
                  className = {classes.drawerEstimate}
                  onClick ={() =>setOpenDrawer(false)}  divider button component={Link} to='/estimate'>
                      <ListItemText
                      className={classes.drawerItem}
                      >Free estimate</ListItemText>
                  </ListItem>
              </List>
            </SwipeableDrawer>
          <IconButton className={classes.drawerIconContainer} onClick={() =>setOpenDrawer(!openDrawer)} disableRipple>
            <MenuIcon className={classes.drawerIcon}/>
         </IconButton> 
        </React.Fragment>
    )
    return(
        <React.Fragment>
            <ElevationScroll>
            <AppBar position="fixed" className={classes.appBar} color="primary">
                <ToolBar disableGutters>
                    {/* <Topography variant="h3">
                        Arc project
                    </Topography> */}
                <Button component={Link} to='/' disableRipple onClick = { () => props.setValue(0)}className={classes.logoContainer} >
                <img alt = "company logo" className = {classes.logo} src={logo}/>
                </Button>
               { matches ? drawer : tabs}
                
                </ToolBar>
            </AppBar>   
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>
        
    )

}

export default Header