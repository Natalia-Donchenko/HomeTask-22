import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools, compose } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const initialState = {

}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose

const composeEnhancers = composeFunc(applyMiddleware(thunk ))

const store = createStore(rootReducer(), initialState, composeEnhancers)

export default store