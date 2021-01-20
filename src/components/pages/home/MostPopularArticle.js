import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import WOW from "wowjs";  
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ListAction } from '../../redux/actions'
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
    const dispatch = useDispatch()
    const classes = useStyles();
    useEffect(()=>{ new WOW.WOW().init()
      dispatch(ListAction())
    
    },[])
    let articles = useSelector(state => state.articleList.data)   
    
    const search = (e) => {
      e.preventDefault()
      let val = e.target.value
      const re = new RegExp(_.escapeRegExp(val), 'i')
      const checkFrom = articles
      const isMatch = (checkFrom) => re.test(checkFrom.abstract)
      const results = _.filter(checkFrom, isMatch)
      
      setCopyArticle({
        ...copyArticle,
        results,
      })
    }
    let allArticle = []
    copyArticle.results !== undefined ?
    allArticle = copyArticle.results :
    allArticle = articles

    return (
        <div>
          <Grid container className="search-wrap">
            <Grid item xs={12} sm={12} md={12} className="search-place">
              <input type = "text" name="search" className="search-here" placeholder="Search" onChange={search}/>
            </Grid>
          </Grid>
            <Grid container spacing={3}>
              { 
              allArticle !== undefined ?
              allArticle.length !== 0?
             
              allArticle.map((article,index) => { return (              
                <Grid item xs={12} sm={6} md={3} key = {article.id} data-wow-delay="5s" className="wow animate__slideInUp">
                <Card width="100%" height= "180">
                  <CardActionArea>
                    
                     <Link to={`${'/article/'+article.id}`}>
                      <CardMedia
                        className={classes.media}
                        image={
                          article[index] !== undefined ?
                          article[index].media[0] !== undefined ?
                          article[index].media[0]['media-metadata'][article[index].media[0]['media-metadata'].length-1].url :
                          "https://img2.pngio.com/ikmf-krav-maga-default-png-720_405.png"
                          :
                          article.media[0] !== undefined ?
                          article.media[0]['media-metadata'][article.media[0]['media-metadata'].length-1].url :
                          "https://img2.pngio.com/ikmf-krav-maga-default-png-720_405.png"
                        }
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
                      { article.abstract !== "" ?  article.abstract.substr(0, 150)+'...' : "Not Updated"}
                      </Typography>
                    </CardContent>
                </Card>
              </Grid>
              
               )} ) : 
               <CardContent style={{ paddingTop:'5px'}} key={1}>                      
                <Typography variant="body2" color="textSecondary" component="p" style = {{color:"#c70000"}}>
                  Sorry... No result found
                </Typography>
              </CardContent>
               : null }
            </Grid>
            </div>
    );
};

export default MostPopularArticle;