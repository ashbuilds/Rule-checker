import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home, Flow, About, NotFound } from './containers';
import style from './style/index.css';

const App = () => (
  <div className={style.wrapper}>
    <Header />
    <main className={style.main}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/flow/:id" component={Flow} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
