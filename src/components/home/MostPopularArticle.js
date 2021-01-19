import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { ListAction } from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 100,
      },
      media: {
        height: 40,
        paddingTop: '56.25%', // 16:9
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));

const MostPopularArticle = () => {
    
    const dispatch = useDispatch()
    const classes = useStyles();
    useEffect(()=>{ dispatch(ListAction()) },[])
    let articles = useSelector(state => state.articleList.data)
    articles !== undefined ? articles.data !== undefined ? articles = articles.data.results :console.log(""):console.log("")
    console.log(articles)
    
    return (
        <div>
          <Button onClick={()=> dispatch(ListAction())}>click</Button>
            <Grid container spacing={3}>
{/* { console.log(articles.length)} */}
              { articles !== undefined ?
              
              articles.map((article) => { return (
                
                <Grid item xs={12} sm={6} md={3} key = {article.id}>
                <Card width="100%" height= "180">
                  <CardActionArea>
                    <Link to="/article">
                      <CardMedia
                        className={classes.media}
                        image="https://static01.nyt.com/images/2021/01/15/us/politics/15georgia/15georgia-thumbStandard.jpg"
                        title="Contemplative Reptile"
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h4">
                        {article.title.substr(0, 50)+'...'}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      {article.abstract.substr(0, 150)+'...'}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p" style={{display: 'inline-block'}}>
                        {article.published_date}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" style={{display: 'inline-block', float:'right'}}>
                      {article.abstract.substr(0, 150)+'...'}
                      </Typography>
                    </CardContent>
                </Card>
              </Grid> )} ) : null }
            </Grid>
            </div>
    );
};

export default MostPopularArticle;