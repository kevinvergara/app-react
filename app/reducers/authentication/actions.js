import { type Dispatch } from 'redux';
import type {AuthenticationStart} from "./index";

export const authenticationActions = {
    authenticate: (status: 'BEGIN_AUTHENTICATION', payload: any) =>
        (dispatch: Dispatch<AuthenticationStart>) => {
            if (status === 'BEGIN_AUTHENTICATION') {
                dispatch({type: 'BEGIN_AUTHENTICATION', payload});
            }
        },
}

