import React from 'react';
import { Card,CardActions,CardMedia,Typography,Button, CardContent } from "@material-ui/core";
import DeleteIcon  from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbsUpIcon from "@material-ui/icons/ThumbUpAlt";
import moment from 'moment';
import useStyles from './styles';
import { deletePost, likePost } from '../../../Actions/Posts';
import { useDispatch } from 'react-redux';
 const Post = ({post,setcurrentId}) => {
     const classes=useStyles();
     const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media}
             title={post.title} image={post.selectedFile} />
                <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

                </div>
                <div className={classes.overlay2}>
                    <Button style={{color:'white'}} size='small' onClick={()=>setcurrentId(post._id)}>
                        <MoreHorizIcon  fontSize='default' />
                        </Button>

                </div>
                <div className={classes.details}>
                    <Typography variant="body2" gutterBottom>
                        {post.tags.map((tag)=>`#${tag} `)}
                        </Typography>
                        <CardContent>
                        <Typography variant="h6" gutterBottom>{post.title}</Typography>
                        <Typography variant="body1">{post.message}</Typography>
                        </CardContent>
                    <CardActions className={classes.CardActions}>
                    <Button size="small" onClick={()=>dispatch(likePost(post._id))}>
                        <ThumbsUpIcon fontSize="small" />
                        &nbsp;Like{' '}{post.likeCount}
                        </Button>
                    <Button color="primary" size="small" onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                        &nbsp;Delete
                        </Button>
                    </CardActions>
                </div>
           
        </Card>
    )
}
export default Post;