import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({name}) {

    const[state, dispatch] = React.useReducer(reducer, initialState);

    console.log(state.value)

    React.useEffect(() => {
        
        if(state.loading){
            console.log("start")

            setTimeout(() => {

                if(state.value !== SECURITY_CODE){
                    dispatch({
                        type: 'ERROR',
                    })
                } else{
                    dispatch({
                        type: 'CONFIRM',
                    })
                }

                console.log("finish")

            }, 3000) 
        }

    }, [state.loading])

    if (!state.deleted && !state.confirmed){
        return(
            <div>
            <h2>Remove {name}</h2>

            <p>Please, write your security code to proceed with this operation</p>

            {(state.error && !state.loading) && (
                <p>Error: The security code is not correct</p>
            )}
            {state.loading && (
                <p>Loading information...</p>
            )}

            <input 
                type="text"
                placeholder="Security code"
                value={state.value}
                onChange={(event) => {
                    dispatch({
                        type: 'WRITE',
                        payload: event.target.value
                    })
                }
            }
                ></input>

            <button 
                type="button"
                onClick={() => {
                    dispatch({
                        type: 'CHECK'
                    })
                }
            }
            >
                Check</button>
        </div>
        );
        
    } else if (state.confirmed && !state.deleted) {
        return(
            <React.Fragment>
                <p>Please confirm your action. Are you sure you want to delete {name}?</p>
                <button
                    type="button"
                    onClick={() => {
                        dispatch({
                            type: 'DELETE',
                        })
                    }}
                >Yes, just delete it</button>
                <button
                    type="button"
                    onClick={() => {
                        dispatch({
                            type: 'RESET',
                        })
                    }}
                >Nah, I changed my mind</button>
            </React.Fragment>
        );

    } else {
        return(
            <React.Fragment>
                <p>Succesfully deleted</p>
                <button
                    type="button"
                    onClick={() => {
                        dispatch({
                            type: 'RESET',
                        })
                    }}
                >
                    Reset, undo the changes
                </button>
            </React.Fragment>
        );
    }
}


const initialState = {
    value: '',
    error: false, 
    loading: false,
    deleted: false,
    confirmed: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return{
                ...state,
                error: true, 
                loading: false,
            };
        case 'CHECK':
            return {
                ...state,
                loading: true,
            };
        case 'CONFIRM':
            return {
                ...state,
                loading: false,
                error: false,
                confirmed: true,
            }
        case 'DELETE':
            return{
                ...state,
                deleted: true,
            }
        case 'RESET':
            return{
                ...state,
                value: '',
                error: false, 
                loading: false,
                deleted: false,
                confirmed: false,
            }
        case 'WRITE':
            return{
                ...state,
                value: action.payload
            }
        default:
            return {
                ...state,
            };
    }
}

export { UseReducer };