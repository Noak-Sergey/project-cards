import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { error404Reducer } from "./error404Reducer";
import {logInReducer} from "./loginReducer";
import {newPasswordReducer} from "./newPasswordReducer";
import {passRecoveryReducer} from "./passRecoveryReducer";
import {profileReducer} from "./profileReducer";
import {registrationReducer} from "./registrationReducer";

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    logIn: logInReducer,
    registration: registrationReducer,
    profile: profileReducer,
    passRecoveryReducer: passRecoveryReducer,
    newPasswordReducer: newPasswordReducer,
    error404: error404Reducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));