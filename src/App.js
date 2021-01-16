import React, { useEffect } from 'react'
import axios from 'axios'
import Home from './components/home/Home'
function App() {
useEffect(() =>{ axios('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=y0pGKNASy3k8cP39dmvdwjPGaPG8dLhk')
.then(data => console.log(data))
.catch(err=>{ alert(err) })
},[])
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
