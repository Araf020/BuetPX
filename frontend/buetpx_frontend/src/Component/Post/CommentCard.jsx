import React, { Component } from 'react'
import {Card,CardContent,CardHeader,Grid,Paper} from '@mui/material';
// import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions';
import {IconButton,CardMedia,Avatar,CardActionArea,Typography} from '@mui/material';
import Time from 'react-time-format';


function CommentCard(props) {
  const {id,comment_txt,comment_date,user}=props.comment
  return (
    // <Card sx={{ width: 500,marginTop:2 }}>
            
    //     <CardHeader
    //     avatar={<IconButton href="\"><Avatar alt={user.name} src={user.photo_url} /></IconButton>}
    //     // action={
    //     //   <IconButton aria-label="settings">
         
    //     //   </IconButton>
    //     // }
    //     sx={{
    //       height:25
    //     }}
    //     title={<Typography
    //     // variant="h6"
    //     noWrap
    //     component="a"
    //     href="/"
    //     sx={{
    //       mr: 2,
    //       display: { xs: 'none', md: 'flex' },
    //       fontFamily: 'revert-layer',
    //       fontWeight: 500,
    //       // letterSpacing: '.3rem',
    //       color: 'inherit',
    //       fontSize:16,
    //       textDecoration: 'none',
    //     }}
    //   >
    //     {user}
    //   </Typography>}
    //     subheader={
    //       // date
    //     <Time value={comment_date} format="YYYY-MM-DD HH:mm"/>
    //   }

    //   />

    //   <CardContent>
    //     <Typography variant="body2" color="text.secondary">
    //     {comment_txt}
    //     </Typography>
    //   </CardContent>
    //   </Card>

    <Paper style={{ padding: "20px 20px", marginTop: 10,width:'80%' }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" />
          </Grid>
          <Grid justifyContent="left" item >
            <h4 style={{ margin: 0, textAlign: "left" }}>{user}</h4>
            <p style={{ textAlign: "left" }}>
              {comment_txt}
            </p>
            {/* <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p> */}
          </Grid>
        </Grid>
      </Paper>
      
  )
}

export default CommentCard
