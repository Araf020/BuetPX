import React from 'react';
import {useState, useEffect} from "react";
import {Grid,Button,Typography, TextField} from "@mui/material";
import Header from '../../Static/Header';
import Box from '@mui/material/Box';
import {Card, CardContent, CardMedia, CardActionArea, CardActions} from '@mui/material';
import Modal from '@mui/material/Modal';

const GalleryCard = ({gallery})=>{

    return(
        <Grid item xs={3}> <Card sx={{ marginRight:2,marginTop:2}}>
        <CardActionArea onClick={(e)=>{

            window.location.href="/Gallery/"+gallery.id;
          }}>
            
          <CardMedia
            component="img"
            height="140"
           
            // image={quest.photoUrl}
            alt="loading.."
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {gallery.title}
            </Typography>
           
            
          </CardContent>
        </CardActionArea>
      </Card>
            {/* <Button sx={{marginRight:2}} href = {"/Gallery/"+gallery.id} variant='outlined' >{gallery.title}</Button> */}
        </Grid>
    )
}

export default GalleryCard