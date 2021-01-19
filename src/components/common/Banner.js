import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './CommonStyle.css'

const Banner = () => {
  return (
    <Grid container className="banner-wrap">
      <Grid item xs={12} sm={12} md={12}>
        <CardContent>
                      
          <Typography variant="h2" component="h1" className="banner-title">
              NEW YORK TIMES
           </Typography>
        </CardContent>
      </Grid>
    </Grid>
      
    
  );
};

export default Banner;