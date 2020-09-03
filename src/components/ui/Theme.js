import { createMuiTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60' ;
const arcGrey = '#868686'
export default createMuiTheme({

    palette :{
        common :{
        blue : `${arcBlue}`,
        orange : `${arcOrange}`
        },

        primary:{
            main : `${arcBlue}`
        },

        secondary:{
            main : `${arcOrange}`
        }
    },

    typography :{
        h3 : {
            fontWeight : 300
        },

        h2 : {
            fontFamily : 'Arial',
            fontWeight : '700',
            fontSize :'2.5rem',
            color : `${arcBlue}`,
            lineHeight :1.5
        },

        h4 : {
            fontFamily : "Arial",
            fontSize : '1.75rem',
            color : `${arcBlue}`,
            fontWeight : '700'
        },
        h3 :{
            fontSize:'2.5em',
            color : arcBlue
        },
        subtitle1 : {
            fontSize : '1.25rem',
            fontWeight : '300',
            color : `${arcGrey}`
        },

        subtitle2 : {
            color : 'white',
            fontSize :'1.25rem',
            fontWeight :'300'
        },

        learnButton : {
            borderColor : `${arcBlue}`,
            color : `${arcBlue}`,
            borderWidth :2,
            textTranform : "none",
            borderRadius : 50,
            fontFamily :'Roboto',
            fontWeight :'bold'
        },

        body1 :{
            fontSize : '1.25rem',
            color :arcGrey,
            fontWeight : '300'
        },
        caption : {
            fontSize : '1em',
            fontWeight : 300,
            color : grey
        }


    },
    // Overrides the base color
    overrides :{
        // form inputLabel API
        MuiInputLabel :{
            root :{
                color : arcBlue,
                fontSize : '1rem'
            }
        },
        MuiInput :{
                underline :{
                    "&:before" :{
                        borderBottom : `2px solid ${arcBlue}`
                    },
                    // To remove that black hover effect
                    "&:hover:not($disabled):not($focused):not($error):before" :{
                        borderBottom : `2px solid ${arcBlue}`

                    }
                }
        }
    }
 });