import type { Reducer } from 'redux';
import {Action} from "../../lib/utils";

export type AuthenticationStart = Action<'BEGIN_AUTHENTICATION'>;

export type loginState = {
    isLogin: boolean,
}

const reducer: Reducer<loginState, AuthenticationStart> = (state: loginState = { isLogin: false}, action: AuthenticationStart) => {
    switch(action.type){
        case 'BEGIN_AUTHENTICATION':{
            return {isLogin: true};
        }
        default: {
            return state;
        }
    }
}

export default reducer;
