import { takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';


//Generando el watcher Saga
//escuchando el API_CALL_REQUEST acciones

export function* watcherSaga (){
    //escuchando las acciones y empiezan los workers
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

//worker Saga
//Es llamado desde el watcher saga, hacia el login y despacha una acción

export function* workerSaga(action){
    try{
        const response = yield call(fetchHttp(action.payload.request));
        //obetener el token de la respuesta
        const token = response.data.token;
        yield put({
            type: action.payload.okAction, //acción del API_CALL_SUCCESS
            payload:{
                token:token
            }
        })
    }catch (error){
        yield put({
            type:action.payload.failAction, //acción del API_CALL_FAILURE
            payload:{
                error:error
            }
        })
    }
}

const fetchHttp = (request)=>{
    return function(){
        return(axios(request));
    }
}