import React, { useEffect, useState } from 'react';
import { Container,Grid,Grow,AppBar,Typography } from "@material-ui/core";
import  memories  from './images/memories.png';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPosts } from './Actions/Posts';

function App() {
const [currentId, setcurrentId] = useState(null);
const classes=useStyles();
const dispatch = useDispatch();

useEffect(() => {
dispatch(getPosts());
}, [currentId,dispatch])
  return (
<container maxWidth="lg" >
  <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h2" align="center">
      Memories
    </Typography>
    <img className={classes.image} src={memories} alt="memories" height="60" />
    </AppBar>
    <Grow in>
    <Container>
      <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch">
        <Grid item xs={12} sm={7}>
        <Posts  setcurrentId={setcurrentId}/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <Form currentId={currentId}  setcurrentId={setcurrentId} />
      </Grid>

      </Grid>
    </Container>
    </Grow>
  

</container>
  );
}

export default App;
