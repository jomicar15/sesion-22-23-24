import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        //recibe el estado que va a controlar
        todosState: todosReducer,
        filterState: filterReducer,
        // Asyc example (login user)
        userState:userReducer
    }
)
