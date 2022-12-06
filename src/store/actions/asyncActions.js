
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; //Las request son escuchadas por el watcher saga
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; // dispatch por los worker saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE';// dispatch por los worker saga


export const login = (email,password)=>{

    return {
        type: API_CALL_REQUEST,
        payload: {
            method: 'post',
            url: 'https://reqres.in/api/login',
            data :{
                email:email,
                password:password
            },
            okAction : API_CALL_SUCCESS,
            failureAction : API_CALL_FAILURE
        }
    }
}



//Solución genérica de httpRequest para el despachador de acciones
export const httpRequest = (method, url, data)=>{

    return {
        type: API_CALL_REQUEST,
        payload: {
            method: method,
            url: url,
            data : data,
            okAction : API_CALL_SUCCESS,
            failureAction : API_CALL_FAILURE
        }
    }
}