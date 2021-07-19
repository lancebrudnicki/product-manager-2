import React from 'react';
import Main from './views/Main';
import { Router } from '@reach/router';
import Productdetail from './views/Productdetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product"/>
        <Productdetail path="product/:id"/>
      </Router>
    </div>
  );
}

export default App;
