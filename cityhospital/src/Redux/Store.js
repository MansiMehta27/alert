import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer'
import createSagaMiddleware from 'redux-saga'
import { rootsaga } from './saga/Route.Saga'


const sagaMiddleware = createSagaMiddleware()

const middleware =[thunk,sagaMiddleware];

export const configurstore=()=>{
    let store = createStore(rootReducer, applyMiddleware(...middleware))
    sagaMiddleware.run(rootsaga)
    return store;
   
}