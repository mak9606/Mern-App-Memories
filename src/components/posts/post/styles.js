import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        borderRadius:'15px',
        height:'100%',
        position:'relative',

    },
    media:{
        height:0,
        paddingTop:'56.25%',
       backgroundColor:'rgba(0,0,0,0.5)',
       backgroundBlendMode: 'darken',
    },
    grid:{
        display:'flex',

    },
    overlay:{
        color:"white",
        top:'20px',
        left:'20px',
        position:'absolute',
    },
    overlay2:{
        position:'absolute',
        top:'20px',
        right:'10px',
        color:'white',
    },
    details:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        margin:'20px 0',
    },
    title:{
        padding:'0 10px',
    },
    border: {
        border: 'solid',
      },
    title1:{
        padding:'0 10px',
    },
    CardActions:{
        padding:'0 16px 8px 16px',
        display:'flex',
        justifyContent:'space-between',
    },
    fullHeightCard: {
        height: '100%',
      },
}))