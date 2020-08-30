const redux = require('redux');

const store = redux.createStore(function(state = [], action) {
    if(action.type === 'ADD') return [ ...state, action.data ];
    if(action.type === 'DEL') return state.filter(i => i.name !== action.name);
});

store.subscribe(function() {
    console.log( store.getState() );
});

store.dispatch({ type: 'ADD', data: { name: 'Alice' } });
store.dispatch({ type: 'ADD', data: { name: 'Bob' } });
store.dispatch({ type: 'DEL', name: 'Bob' });
store.dispatch({ type: 'ADD', data: { name: 'Tom' } });
