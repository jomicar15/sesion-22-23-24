import { createStore, configureStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools} from "redux-devtools-extension"
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from '../sagas/sagas'



export const createAppStore = () =>{
    let store = createStore(rootReducer, composeWithDevTools());
    
    return store;
}

export const createAsyncAppStore = () =>{

    const sagaMiddleware = createSagaMiddleware();


    let store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
            ) 
        );

        // inicializamos el watcher saga
        sagaMiddleware.run(watcherSaga); 
    
    return store;
}
