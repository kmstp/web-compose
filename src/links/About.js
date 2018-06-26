import React from 'react';
import { Link } from 'react-router-dom';
import PubSub from 'pubsub-js';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wsMessage: 0
    };
  }
  componentWillMount(){
    // This is where we subscribe this class to the 'GET FILES' subscription.
    // once a publish event for 'GET FILES' has been fired, FileList.subscriber() will be triggered.
    this.token = PubSub.subscribe('WS_MESSAGE', this.subscriber.bind(this));
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }

  subscriber(msg, data){
    console.log(data);
    this.setState ({ wsMessage: data });
  }

  render () {
    return (
      <Link to="/about">{this.state.wsMessage}</Link>
    );
  }
}

