import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/home/Home'
import Article from './components/pages/article/Article'
import Header from './components/common/Header'
import Banner from './components/common/Banner'
function App() {
  return (
    <div className="App">
    
    <Router>
        <Header />
        <Banner />
      
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/article/:id" render={ props => <Article {...props} />}  />
    </Router>
    </div>
  );
}

export default App;
