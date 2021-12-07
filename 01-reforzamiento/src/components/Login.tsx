import { useReducer, useEffect } from 'react';

interface AuthState {
    validando: boolean;
    token: (string | null);
    username: string;
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type AuthAction = {
    type: 'logout'
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }

        default:
            return state;
    }
}

export const Login = () => {
    
    // const [state, dispatch] = useReducer(authReducer, initialState);
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'});
        }, 1500);
    }, []);

    if( validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        );
    }
 
    return (
        <>
            <h3>Login</h3>
            {
                ( token )
                    ?  
                    <div className="alert alert-success">
                        Autenticado como : { nombre }
                    </div> 
                    :
                    <div className="alert alert-danger">
                        No autenticado
                    </div>

            }

            {
                ( token )
                ?
                    (
                        <button
                            className="btn btn-danger"
                        >
                        Logout
                        </button>
                    )
                :
                    (
                        <button
                            className="btn btn-primary"
                        >
                            Login
                        </button>
                    )
            }
        </>
    )
}