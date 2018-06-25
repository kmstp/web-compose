import React from 'react';
import { Route } from 'react-router-dom';
import Signup from '../components/Signup';

export default () => (
  <Route path="/signup" component={Signup}/>
)
