import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pure/Home';

export default () => (
  <Route exact path="/" component={Home} />
)
