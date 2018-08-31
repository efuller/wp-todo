import { events } from '../utilities/Events';

function state() {
	let store = {};
	return {
		setState( data ) {
			Object.assign( store, data );
			events.emit( 'state-change', store );
		},
		getState() {
			return store;
		}
	};
}

export let appState = state();
