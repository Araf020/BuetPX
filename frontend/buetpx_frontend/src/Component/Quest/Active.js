import React from 'react';
import { Grid } from '@mui/material';
import {FormLabel,FormControl,FormGroup, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import {Card, CardContent, CardMedia, Typography, CardActionArea, CardActions} from '@mui/material';
import { makeStyles, styled, alpha } from '@material-ui/core/styles';
import {InputBase, InputLabel, Select} from '@mui/material';
import {TextField,Box, Menu, MenuItem} from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';

import Header from '../../Static/Header';
import {Divider, Button} from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import CameraEnhanceTwoToneIcon from '@mui/icons-material/CameraEnhanceTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import TagTwoToneIcon from '@mui/icons-material/TagTwoTone';
import {useState, useEffect} from "react";

const activeList = [
    {
        id: 1,
        title: 'Quest 1',
        description: 'This is a quest',
        category: 'Adventure',
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022',
        endDate: '01/09/2022',
        status: 'Active',
        reward: 'Reward',
        

    },
    {
        id: 2,
        title: 'Quest 2',
        description: 'This is a quest',
        category: 'Language',
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022',
        endDate: '08/09/2022',
        status: 'Active',
        reward: 'Reward',
    },
    {
        id: 3,
        title: 'Quest 3',
        description: 'This is a quest',
        category: 'Education',
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022',
        endDate: '06/09/2022',
        status: 'Active',
        reward: 'Reward',
    },
    {
        id: 4,
        title: 'Quest 4',
        description: 'This is a quest',
        category: 'Culture',
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022',
        endDate: '02/09/2022',
        status: 'Active',
        reward: 'Reward',
    },
    {
        id: 5,
        title: 'Quest 5',
        description: 'This is a quest',
        category: 'Technology',
        goal: 'What is the goal of this quest',
        startDate: '01/08/2022',
        endDate: '03/09/2022',
        status: 'Active',
        reward: 'Reward',
    }

]

const Active = () => {

    
  const formatDate = (date) => {
    // format to i.e 6 jan, saturday at 3:00pm
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";

    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var date = n  + ", "+mon +" " + day + ", " + year + " at " + h + ":" + m;
    return date;
  }

    return(
        <div>
        <Grid container spacing={2} sx={{paddingLeft:'10px', paddingRight:'10px',paddingBottom:'10px'}}>
            {activeList.map(quest_ => (
              <Grid item xs={12}>

              <CardActionArea onClick={(e)=>{
                console.log(quest_.id);
                console.log(" selected...");
              }}>
              <Card style={{ minWidth:275 , height:'80%' , backgroundColor:'#f5f5f5'}}>
              {/* <Card sx={{ minWidth: 275 }}> */}
                <CardContent>
                  <Typography  variant="h5"  sx={{ fontSize: 21 }} color="text.secondary" gutterBottom>
                    {quest_.title}
                  </Typography>
                  
                  <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                    {quest_.description}
                  </Typography>
                  <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                    {quest_.category}
                    </Typography>
                    <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                    {quest_.goal}
                    </Typography>
                    <Typography  sx={{ mb: 1.5 }} color="text.secondary">
                     Status:: {quest_.status}
                    </Typography>
                  {/* make it bold */}
                  <Typography variant="h5" sx={{ mb: 1.5, font:'caption' }} color="text.secondary">
                    Deadline: {formatDate(quest_.endDate)}
                  </Typography>
                  
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
              </CardActionArea>
              </Grid>
             

              
              
            ))}
        </Grid>
        </div>

    );
}

export default Active;
