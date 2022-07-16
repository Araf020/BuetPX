import '../App.css';
import React from 'react';
import {Avatar, Grid} from "@mui/material";
import {Paper} from "@mui/material";
import Header from '../Contents/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from '@mui/material';
import { TextField } from '@material-ui/core';
import { Chip } from '@mui/material';
import { Box } from '@mui/material';
import Content from './post_content';
// import post_info from "./post_info";
import Button from '@mui/material/Button';

import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

import {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CommentCard from './Comment/CommentCard';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
}));

const  Post=()=>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setpost] = useState([]);  
    const [comments, setcomments] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/api/posts/"+id)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setpost(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, []);
      const {post_title,post_date,photo_url,owner,category,place,tags}=post;

      useEffect(() => {
        fetch("http://localhost:8000/api/posts/"+id+"/comments")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setcomments(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, []);

    const getTag = tag => {

        return (

            <Button variant="outlined" color="primary" >   {tag} </Button>
        

        );
    };

    const getComment = comment => {
        return (
        
          <CommentCard comment={comment}/>
      
      // <Grid item xs={8}>
      // <Item>  {comment.comment_txt} By {comment.user} </Item>

      
      // </Grid>

        

        );
    };

    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
            <Header/>
            </Grid>
     
        {/* etar baire header contianer */}
            <Grid container spacing={2} marginLeft={4} >

                {/* 1st Column  */}
                <Grid container item xs={6} direction="row" >
                <Grid item xs={12}>
                {/* <h1> Header</h1> */}
                </Grid>
                <Grid item xs={12}>
                    <ButtonBase sx={{ width: 500, height: 300 }}>
                        <Img src={photo_url} alt='1.jpg'/>
                    </ButtonBase>
                </Grid>
                {/* 2ND ROW  */}
                <Grid item container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2}> <IconButton size="small"><ThumbUpIcon/></IconButton> </Grid>    
                </Grid>
                {/* 3rd ROW  */}
                <Grid item xs={2} >
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                        Category
                        </Typography>

                </Grid>
                <Grid item xs={10}><Button variant="outlined" color="secondary">   {category} </Button> </Grid>

                {/* 4th row */}
                <Grid item xs={2} >
                        <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'revert-layer',
                            fontWeight: 600,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                        Tags
                        </Typography>

                </Grid>
                <Grid item xs={10} >{tags?.map(tag => getTag(tag))}</Grid>
                {/* <Grid item xs={10} >{tags}</Grid> */}

                
                <Grid item xs={12}>
                {/* <h1> Hello 1234</h1> */}
                </Grid>
                
                </Grid>


                {/* 2nd Column */}
                <Grid container item xs={6} direction="row" >
                <Grid item xs={8}>
                {/* <h1> Header </h1> */}
                </Grid>
                <Grid item xs={10}>
                <TextField 
                        // sx={{width: 10}}
                        id="filled-multiline-static"
                        label="Add a Comment"
                        multiline
                        // rows={4}
                        defaultValue=""
                        variant="outlined"
                        />
                </Grid>
                
                
                {comments.map(comment => getComment(comment))}
                
                <Grid item xs={8}>
                {/* <h1> Hello 1234</h1> */}
                </Grid>
                
                </Grid>
            </Grid>

        {/* etar baire header contianer */}
        </Grid>  
                        
    
    );
    }

    export default Post;