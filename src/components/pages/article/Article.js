import React from 'react';
import Container from '@material-ui/core/Container';
import ArticleList from './ArticleList'

const Article = () => {
    return (
        <Container maxWidth="lg">
            <ArticleList />
        </Container>
    );
};

export default Article;