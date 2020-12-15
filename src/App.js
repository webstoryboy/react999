import React from 'react';
import Main from './routes/Main';
import About from './routes/About';
import Reference from './routes/Reference';
import Script from './routes/Script';
import Ani from './routes/Ani';
import Site from './routes/Site';
import Contact from './routes/Contact';
import Detail from './routes/Detail';
import { HashRouter, Route } from 'react-router-dom';
import './scss/style.scss';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/reference" component={Reference} />
      <Route path="/reference-detail" component={Detail} />
      <Route path="/script" component={Script} />
      <Route path="/ani" component={Ani} />
      <Route path="/site" component={Site} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  )
}

export default App;
