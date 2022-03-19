import React from "react";

const SECURITY_CODE = 'paradigma';

// Decalarative way to write code with useReducer

function UseReducer({name}) {

    const[state, dispatch] = React.useReducer(reducer, initialState);

    const onConfirm = () => dispatch({type: actionTypes.confirm});
    const onError = () => dispatch({type: actionTypes.error});
    const onReset = () => dispatch({type: actionTypes.reset});
    const onCheck = () => dispatch({type: actionTypes.check});
    const onDelete = () => dispatch({type: actionTypes.delete});

    const onWrite = (event) =>{
        dispatch({type: actionTypes.write, payload: event.target.value})
    }

    console.log(state.value)

    React.useEffect(() => {
        
        if(state.loading){
            console.log("start")

            setTimeout(() => {

                if(state.value !== SECURITY_CODE){
                    onError();
                } else{
                    onConfirm();
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
                disabled={state.loading}
                value={state.value}
                onChange={(event) =>{
                    onWrite(event)
                }
                }
            ></input>

            <button 
                type="button"
                onClick={onCheck}
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
                    onClick={onDelete}
                >Yes, just delete it</button>
                <button
                    type="button"
                    onClick={onReset}
                >Nah, I changed my mind</button>
            </React.Fragment>
        );

    } else {
        return(
            <React.Fragment>
                <p>Succesfully deleted</p>
                <button
                    type="button"
                    onClick={onReset}
                >
                    Reset, undo the changes
                </button>
            </React.Fragment>
        );
    }
}


const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    check: 'CHECK',
    delete: 'DELETED',
    reset: 'RESET',
    write: 'WRITE',
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
        case actionTypes.error:
            return{
                ...state,
                error: true, 
                loading: false,
            };
        case actionTypes.check:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.confirm:
            return {
                ...state,
                loading: false,
                error: false,
                confirmed: true,
            }
        case actionTypes.delete:
            return{
                ...state,
                deleted: true,
            }
        case actionTypes.reset:
            return{
                ...state,
                value: '',
                error: false, 
                loading: false,
                deleted: false,
                confirmed: false,
            }
        case actionTypes.write:
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