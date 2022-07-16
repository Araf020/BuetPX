import '../App.css';
import React from 'react';
import {Grid} from "@mui/material";
import {Paper} from "@mui/material";
import Header from '../Contents/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import {IconButton} from '@mui/material';
import { TextField } from '@material-ui/core';
import { Chip } from '@mui/material';
import { Box } from '@mui/material';
import Content from './post_content';
import post_info from "./post_info";
import Button from '@mui/material/Button';
import FontPost from "./font"; 
import {Typography} from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Post(props) {
  const {id,post_title,post_date,photo_url,owner,category,place,tags}=props

  return (
    <Grid container spacing={2} >

        {/* 1st Column  */}
        <Grid container item xs={6} direction="column" >
          <TextField />
          <TextField />
          <TextField />
        </Grid>


        {/* 2nd Column */}
        <Grid container item xs={6} direction="column" >
          <TextField />
          <TextField />
        </Grid>
    </Grid>
    
 
  
  );
}

export default Post;