import React, { useEffect, useState } from 'react';
import { Button, InputAdornment, Paper, TextField, Typography } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPosts, updatePost } from '../../Actions/Posts';

 const Form = ({currentId,setcurrentId}) => {
     const classes=useStyles();
     

     const [postData, setpostData] = useState({
       creator:'',
       title:'',
       message:'',
       tags:'',
       selectedFile:''
     });
     const post = useSelector(state =>currentId ? state.posts.find((p)=>p._id===currentId):null);
     const dispatch = useDispatch();
     useEffect(() => {
      if(post) setpostData(post);
     }, [post])
     const handleSubmit=(e)=>{
       e.preventDefault();

       if(currentId){
         dispatch(updatePost(currentId,postData));
       }
       else{
        dispatch(createPosts(postData));
 
       }
       clear();
     }
     const clear=()=>{
      setcurrentId(null);
       setpostData({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
       });
     }
    return (
<Paper className={`${classes.paper} ${classes.root}`}>
    <form autoComplete="off" noValidate className={classes.form}  onSubmit={handleSubmit}>
        <Typography variant="h6" >{currentId?"Editing a Memory":"Creating a Memory"}</Typography>
        <TextField variant="outlined" label="Creator"
         name="creator" 
         value={postData.creator}
         onChange={(e)=>setpostData({...postData,creator:e.target.value})}
         fullWidth
    InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),        }}

         />
           <TextField variant="outlined" label="Title"
         name="title" 
         value={postData.title}
         onChange={(e)=>setpostData({...postData,title:e.target.value})}
         fullWidth />
         <TextField variant="outlined" label="Message"
         name="Message" 
         value={postData.message}
         onChange={(e)=>setpostData({...postData,message:e.target.value})}
         fullWidth />
         <TextField variant="outlined" label="Tags"
         name="tags" 
         value={postData.tags}
         onChange={(e)=>setpostData({...postData,tags:e.target.value.split(',')})}
         fullWidth />
         <div className={classes.fileinput}>
           <FileBase
           type="file"
           multiple={false}
           onDone={({base64})=>setpostData({...postData,selectedFile:base64})}
           
           />

         </div>
         <Button className={classes.buttonSubmit} type="submit" variant="contained" color="primary" fullWidth>
            Create
         </Button>
         <Button onClick={clear} type="submit" variant="contained" color="secondary" fullWidth>
            Clear
         </Button>
    </form>
</Paper>
    )
}
export default Form;