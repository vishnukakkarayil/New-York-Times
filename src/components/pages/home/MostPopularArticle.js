import React, { useEffect, useState } from 'react';
import _ from 'lodash'
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
// import Link from '@material-ui/core/Link';
import { ListAction } from '../../redux/actions'
import SearchAppBar from '../../common/Search'
import './HomeStyle.css'

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
      articlListTitle: {
        fontSize: '20px'
      },
      commonStyle: {
        padding : '10px 16px'
      },
      publishedDateMain:{
        paddingTop:'0',
        paddingBottom:'0'
      },
      publishedDate:{
        display: 'inline-block',
        fontSize: '12px',
        fontWeight: 'bold'
      }
    }));

const MostPopularArticle = () => {
  const [copyArticle, setCopyArticle] = useState([])
    let imgLength = 0  
    let articleLength = 0
    const dispatch = useDispatch()
    const classes = useStyles();
    useEffect(()=>{ dispatch(ListAction())
    
    },[])

    let articles = useSelector(state => state.articleList.data)
    
    
    
    const search = (e) => {
      
      let val = e.target.value
      const re = new RegExp(_.escapeRegExp(val), 'i')
      const checkFrom = articles
      const isMatch = (checkFrom) => re.test(checkFrom.abstract)
      const results = _.filter(checkFrom, isMatch)
      // console.log(results)
      
    }

    return (
        <div>
          <Grid container className="search-wrap">
            <Grid item xs={12} sm={12} md={12} className="search-place">
              <input type = "text" name="search" className="search-here" placeholder="Search" onChange={search}/>
            </Grid>
          </Grid>
          {/* <SearchAppBar search ={ search }/> */}
            <Grid container spacing={3}>
              { articles !== undefined ?
              
              articles.map((article) => { return (
                
                <Grid item xs={12} sm={6} md={3} key = {article.id}>
                <Card width="100%" height= "180">
                  <CardActionArea>
                    <Link to={
                      { pathname:"/article",
                      id:article.id}
                    }>
                      {
                      imgLength = articles[0].media[0]['media-metadata'].length-1
                      /* { articles[0].media != undefined ?
                      console.log(articles[0].media['media-metadata']) : console.log('fff')} */}
                      <CardMedia
                        className={classes.media}
                        image={articles[articleLength].media[0]['media-metadata'][imgLength].url}
                        title="Contemplative Reptile"
                      />
                    </Link>
                    <CardContent className={classes.commonStyle}>
                      
                    <Typography className={classes.articlListTitle} gutterBottom variant="h5" component="h4">
                        {article.title.substr(0, 50)+'...'}
                      </Typography>
                      
                    </CardContent>
                  </CardActionArea>
                  <CardContent className={classes.publishedDateMain}>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.publishedDate}>
                        {article.source}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.publishedDate} style={{ float:'right'}}>
                      {article.published_date}
                      </Typography>
                    </CardContent>
                    <CardContent style={{ paddingTop:'5px'}}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {article.abstract.substr(0, 150)+'...'}
                      </Typography>
                    </CardContent>
                </Card>
                { articleLength++ }
              </Grid> )} ) : null }
            </Grid>
            </div>
    );
};

export default MostPopularArticle;