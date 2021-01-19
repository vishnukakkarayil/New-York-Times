import React from 'react';
import Container from '@material-ui/core/Container';
import MostPopularArticle from './MostPopularArticle'

const Home = () => {
    return (
        <>
        <Container maxWidth="lg">
            <MostPopularArticle />
        </Container>
        </>
    );
};

export default Home;