import React from 'react';
import Loading from './Loading';
import Loadable from 'react-loadable';

const LoadableRouter = Loadable({
  loader: () => import('./Router'),
  loading: Loading,
  timeout: 10000
});

class Router extends React.Component {
  render() {
    return <LoadableRouter/>;
  }
}

export default Router;
