import React from 'react';
import Main from './veiws/Main';
import { Router } from '@reach/router';
import Productdetail from './views/Productdetail';
import Main from './views/Main'

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
