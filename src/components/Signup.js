import React from 'react';
import Elm from './elmWrapper';
import { Main } from './elm/Signup';
import PubSub from 'pubsub-js';

function setupPorts(ports) {
	ports.wsMessage.subscribe(function(n) {
		//console.log("LOLOL: " + n);
		PubSub.publish("WS_MESSAGE", n);
	});
}
export default () => <Elm src={Main} ports={setupPorts} />;