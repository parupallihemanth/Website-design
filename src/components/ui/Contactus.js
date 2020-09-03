import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme} from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';

import background from '../../assets/background.jpg';
import Phone from '../../assets/phone.svg';
import envolope from '../../assets/email.svg';
import aeroplane from '../../assets/send.svg';

const useStyles = makeStyles( theme =>({
    backgroundStyle :{
        backgroundImage  : `url(${background})`,
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat",
        height : "60em",
        paddingBottom : '10em'
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
        //  marginLeft :'2em',
         [theme.breakpoints.down("sm")] :{
             marginTop : '2em',
             marginLeft : '5em',
             marginRight : '0'
         }
        
    },
    learnButton : {
        ...theme.typography.learnButton,
    },
    message :{
        border : ` 2px solid ${theme.palette.common.blue} `,
        borderRadius : 5,
        marginTop : '5em'
    },
    sendMessage :{
        ...theme.typography.estimate,
        background : theme.palette.common.orange,
        borderRadius : "50px",
        fontSize: "15px",
        textTransform : "none",
        marginLeft : "50px",
        marginRight : "25px",
        height:"45px",
        color : "white",

        "&:hover" :{
        background : theme.palette.secondary.light,

        }
    }

})

)

const Contactus = () =>{
    const classes = useStyles();
    const theme = useTheme();
    const mathchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const mathchMD = useMediaQuery(theme.breakpoints.down("md"))
    const mathchXS = useMediaQuery(theme.breakpoints.down("xs"))

    const [name, setName ] = useState('');
    
    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState("")
    
    const [phone, setPhone] = useState('');
    const [phonelHelper, setPhoneHelper] = useState("")

    const [message, setMessage] = useState('');
    const [open, setOpen] = useState("");

    const onChange = event => {
        let valid;
        switch (event.target.id){

            case 'email' :
                setEmail(event.target.value)
                // Here valid will return true or false
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if(!valid){
                    setEmailHelper('Invalid email')
                } else {
                    setEmailHelper("")
                }
                break
            case 'phone' :
                setPhone(event.target.value)
                // Here valid will return true or false
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if(!valid){
                    setPhoneHelper("Invalid phone")
                } else{
                    setPhoneHelper("")
                }
                break
            
             default :
                break
        }
    }

    const onConfirm = () =>{
        axios.get('https://us-central1-material-ui-practice-2ae0c.cloudfunctions.net/sendMail')
        .then(
            (response) => console.log(response)
        )
        .catch( err => console.log(err))
    }

    return(
        <Grid item container direction="row">
            <Grid item container direction="column" lg={4} xl={3} alignItems="center" justify="center">
                <Grid item>
                    <Grid  container direction="column" >
                    <Grid item>
                    <Typography variant="h2" style={{lineHeight : 1}}>Contact us</Typography>
                    <Typography variant="body1" style={{ color : theme.palette.common.blue}}>We're waiting!</Typography>

                    </Grid>

                <Grid item container style={{marginTop : '2em'}}>
                <Grid item >
                    <img src={Phone} alt="phone" style={{ marginRight:"1em", verticalAlign : "bottom"}}/>
                </Grid>
                <Grid item >
                    <Typography variant="body1" style={{color : theme.palette.common.blue, fontSize:'1rem'}}>(999) 999 9999</Typography>
                </Grid>
                </Grid>

                <Grid item container style={{marginBottom : '2em'}}>
                <Grid item >
                    <img src={envolope} alt="envolope" style={{ marginRight:"1em", verticalAlign : "bottom"}}/>
                </Grid>
                <Grid item >
                    <Typography variant="body1" style={{color : theme.palette.common.blue, fontSize:'1rem'}}>babu@gmail.com</Typography>
                </Grid>
                </Grid>

                <Grid item container >
                    <Grid item>
                        <TextField 
                        label="Name" 
                        id="name" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                        label="Email" 
                        id="email" 
                        value={email} 
                        error = { emailHelper.length !== 0}
                        helperText = {emailHelper}
                        onChange={onChange}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                        label="Phone" 
                        id="phone" 
                        value={phone}
                        error = { phonelHelper.length !== 0} 
                        helperText = {phonelHelper}
                        onChange={onChange} />
                    </Grid>
                    </Grid>
                    <Grid item>
                        <TextField 
                         InputProps = {{ disableUnderline : true }}
                         multiline
                         rows={10}
                         id="message" 
                         value={message} 
                         className = {classes.message}
                         onChange={(event) => setMessage(event.target.value)} />
                    </Grid>
                    <Grid item container justify="center" style={{marginTop : '2em'}}>
                            <Button variant="contained" 
                         onClick = { () => setOpen(true)}

                            className={classes.sendMessage}
                            // disabled = { name.length === 0 || message.length === 0 || emailHelper.length !== 0 ||
                            //              phonelHelper.length !==0 || email.length === 0 || Phone.length === 0}
                            >Send Message
                             <img src={aeroplane} alt="Aero plane" style={{ marginLeft:'1em'}}/></Button>

                    </Grid>
                    </Grid>
                </Grid>

                </Grid>
                    
                <Dialog open={open} onClick={() => setOpen(false)} PaperProps={{ style : {
                    paddingTop : mathchXS ? '1em' : '5em', 
                    paddingBottom : mathchXS ? '1em' : '5em', 
                    paddingLeft : mathchXS ? 0 : mathchSM ? "5em" : mathchMD ? "10em" :'20em',
                    paddingRight : mathchXS ? 0 : mathchSM ? "5em" : mathchMD ? "10em" :'20em'
                }}} >
                                <DialogContent>
                                    <Grid item conatiner>
                                            <Grid item >
                                                <Typography align="center">Confirm message</Typography>
                                            </Grid>
                                            {/* <Grid item container direction="column"> */}
                                            <Grid item>
                        <TextField 
                        label="Name" 
                        id="name" 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                        label="Email" 
                        id="email" 
                        value={email} 
                        error = { emailHelper.length !== 0}
                        helperText = {emailHelper}
                        onChange={onChange}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                        label="Phone" 
                        id="phone" 
                        value={phone}
                        error = { phonelHelper.length !== 0} 
                        helperText = {phonelHelper}
                        onChange={onChange} />
                    </Grid>
                    </Grid>
                    <Grid item>
                        <TextField 
                         InputProps = {{ disableUnderline : true }}
                         multiline
                         rows={10}
                         id="message" 
                         value={message} 
                         className = {classes.message}
                         onClick = { () => setOpen(true)}
                         onChange={(event) => setMessage(event.target.value)} />
                    </Grid>
                    <Grid item container style={{marginTop : '2em'}} alignItems="center">
                        <Grid item >
                            <Button color="primary" style={{fontWeight : 300}}>Cancel</Button>
                        </Grid>
                        <Grid item>
                        <Button variant="contained" 
                         onClick = { onConfirm}

                            className={classes.sendMessage}
                            // disabled = { name.length === 0 || message.length === 0 || emailHelper.length !== 0 ||
                            //              phonelHelper.length !==0 || email.length === 0 || Phone.length === 0}
                            >Send Message
                             <img src={aeroplane} alt="Aero plane" style={{ marginLeft:'1em'}}/></Button>

                        </Grid>
                    </Grid>
                                            {/* </Grid> */}
                                    {/* </Grid> */}
                                </DialogContent>
                </Dialog>
            
            
            <Grid item container className={classes.backgroundStyle} lg={8} xl={9} alignItems="center">
            <Grid item style={{  marginLeft: mathchSM ? "0em" : " 3em", textAlign : mathchSM ? "center" : "inherit"}}>
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
            </Grid>

        </Grid>
    )
}

export default Contactus