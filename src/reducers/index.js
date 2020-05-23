// reducers/index.js
import { ADD, SUB,LANG } from '../actions'
import { combineReducers } from 'redux'

const initState = {
    number: 0, lang:".."
};

const data = (state = initState, action) => {
    console.log(state.lang)
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                number: state.number + 1
            });
        case SUB:
            return Object.assign({}, state, {
                number: state.number - 1
            });
        case LANG:
            initState.lang = action.e
            return Object.assign({}, state, {
                lang: action.e
            });

        default:
            return state;
    }
};

const App = combineReducers({
    data
});

export default App;