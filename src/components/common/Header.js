import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './CommonStyle.css'

const Header = () => {
  return (
    <Grid container className="header-wrap">
      <Grid item xs={12} sm={12} md={12}>
        <CardContent>
                      
          <Typography component="p">
            <Link to = '/' className="menu-items">
              Home
              </Link>
           </Typography>
        </CardContent>
      </Grid>
    </Grid>
      
    
  );
};

export default Header;