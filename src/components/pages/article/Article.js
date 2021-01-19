import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import ArticleList from './ArticleList'

const Article = () => {
    let location = useLocation()
    const [articleId, setArticleId] = useState(location.id)
    return (
        <Container maxWidth="lg">
            <ArticleList articleId = {articleId} />
        </Container>
    );
};

export default Article;