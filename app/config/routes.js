import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../containers/App';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Products from '../components/Products';
import ProductDetail from '../components/ProductDetail';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/products" component={Products}/>
      <Route path="/pdetail" component={ProductDetail}/>
    </Route>
  </Router>
);

export default routes;
