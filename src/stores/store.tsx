import {createStore} from 'redux'
import {persistReducer,persistStore} from "redux-persist"
import storage from 'redux-persist/es/storage';
import RootReducer from "../reducer/RootReducer"
const perConfig ={
    key:"root",
    storage:storage,
    whitelist:['Login']
}

const perReducer = persistReducer(perConfig,RootReducer)
const store = createStore(perReducer)
const perStore = persistStore(store)
export {store,perStore}