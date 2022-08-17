import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReduser } from './Reduser'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga/rootSaga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"]
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReduser)

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]

const configurStore = () =>{
    let store = createStore(persistedReducer, applyMiddleware(...middleware))
    sagaMiddleware.run(rootSaga)
    return store
}
 
export const store = configurStore();

export let persistor = persistStore(store)