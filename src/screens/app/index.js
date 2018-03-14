import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <header>
      <Link to="/flashy">Home</Link>
      <Link to="/flashy/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/flashy" component={Home} />
      <Route exact path="/flashy/about-us" component={About} />
    </main>
  </div>
);

export default App;
