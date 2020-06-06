const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    user :{
        name: 'hicham',
        email: 'hicham@email.com'
    },
    program: {
        name: 'Om',
        level: 1,
        soura:113    
    }
}

// Reducer
 const rootReducer = (state =  initialState  , action) => {
    switch (action.type) {
        case 'ADD_PROGRAM':
            return {
                state = {...user, state.program: action.payload.program}
            }
            break;

        case 'VALID_PROGRAM':
            return {
                state = {...state, state.program: action.payload.program}
            }
            break;
        case 'INSERT_TO_PROGRAM':
            return {
                state = {...state, state.program: action.payload.program}
             
            }
            break;
        default:
            break;
    }
 }

//Store
const store = createStore(rootReducer);
console.log(store.getState());

// dispatching actions
store.dispatch({type:'ADD_PROGRAM', payload: {name:'3ilm', level:'3', soura: 1}});
store.dispatch({type:'VALID_PROGRAM', payload: {name:'3ilm', level:'3', soura: 1}});
store.dispatch({type:'INSERT_TO_PROGRAM', payload: {name:'3ilm', level:'3', soura: 1}});


// subscription
store.subscribe( () => {
    console.log(store.getState());
})