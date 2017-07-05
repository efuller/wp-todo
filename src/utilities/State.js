function state() {
	let store = {};
	return {
		setState( data ) {
			Object.assign( store, data );
		},
		getState() {
			return store;
		}
	};
}

export let appState = state();
