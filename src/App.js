import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home'
import Article from './components/pages/article/Article'
import MenuAppBar from './components/common/Banner'
function App() {
  return (
    <div className="App">
      
    <Router>
      <Switch>
      {/* <MenuAppBar /> */}
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/article:id" component={() => <Article />} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
