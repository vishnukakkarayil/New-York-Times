import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ListAction } from '../../redux/actions'
import './ArticleStyle.css'

const ArticleList = () => {
    let history = useHistory();
    const params = useParams();
    const singleArticleId = params.id
    const dispatch = useDispatch()
    useEffect(()=>{ dispatch(ListAction()) },[])

    let singleArticles = useSelector(state => state.articleList.data)
    return (
        <Grid container spacing={3}>
            {
            singleArticles !== undefined && singleArticleId !== undefined?
            singleArticles.filter(filteredItem => filteredItem.id == singleArticleId)
            .map((filteredItem,index) => {
            return(

            <Grid item xs={12} sm={9} md={9} key = {index}>
                
                <Typography gutterBottom variant="h2" component="h1" className="article-head">
                    {filteredItem.title}
                </Typography>
                <Typography gutterBottom variant="h5" color="textSecondary" component="h3" className="article-head">
                    {filteredItem.byline}
                </Typography>

                <Grid container spacing={3} className="article-hd">
                    <Grid item sm={3} md={3} className="article-hd-data-wrap">
                        <Typography variant="body2" className="article-hd-data" color="textSecondary" component="p" style={{display: "inline-block", padding:"10px"}}>
                            {filteredItem.source}
                        </Typography>
                    </Grid>
                    <Grid item sm={3} md={3} className="article-hd-data-wrap">
                        <Typography variant="body2" className="article-hd-data" color="textSecondary" component="p" style={{display: "inline-block", padding:"10px"}}>
                        {"Published On : " + filteredItem.published_date}
                        </Typography>
                    </Grid>
                    {filteredItem.subsection !== '' ?
                    <Grid item sm={3} md={3} className="article-hd-data-wrap">
                        <Typography variant="body2" className="article-hd-data" color="textSecondary" component="p" style={{display: "inline-block", padding:"10px"}}>
                            {"Subsection : " + filteredItem.subsection}
                        </Typography>
                    </Grid>
                    : null }
                    <Grid item sm={3} md={3} className="article-hd-data-wrap">
                        <Typography variant="body2" className="article-hd-data" color="textSecondary" component="p" style={{display: "inline-block", padding:"10px"}}>
                            {"Type : " + filteredItem.type}
                        </Typography>
                    </Grid>
                </Grid>
                <CardMedia
                        className="article-img"
                        image={filteredItem.media[0]['media-metadata'][filteredItem.media[0]['media-metadata'].length-1].url}
                        title="Contemplative Reptile"
                      />
                <Typography variant="body2" className="articleDescription" color="textSecondary" component="p">
                    {filteredItem.adx_keywords}
                </Typography>
                <Button onClick={() => history.goBack()} variant="outlined" color="secondary" style={{float:'right'}}>
                    Back
                </Button>
            </Grid>
            )} 
            ) : console.log('')
         }
            <Grid item xs={12} sm={3} md={3}>
                Sidebar
            </Grid>
        </Grid>
    );
};

export default ArticleList;