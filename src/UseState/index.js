import React from "react";

const SECURITY_CODE = 'paradigma';

// Imperative way to write code

function UseState({name}) {

    const[state, setState] = React.useState({
        value: '',
        error: false, 
        loading: false,
        deleted: false,
        confirmed: false,
    });

    console.log(state.value)

    React.useEffect(() => {
        
        if(state.loading){
            console.log("start")

            setTimeout(() => {

                if(state.value !== SECURITY_CODE){
                    setState({
                        ...state,
                        loading: false,
                        error: true,
                    })
                } else{
                    setState({ 
                        ...state,
                        error: false, 
                        loading: false,
                        confirmed: true,
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
                disabled={state.loading}
                value={state.value}
                onChange={(event) => {
                    setState({
                        ...state,
                        value: event.target.value
                    });
                }
            }
                ></input>

            <button 
                type="button"
                onClick={() => {setState({
                    ...state, 
                    loading: true});
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
                        setState({
                            ...state,
                            deleted: true,
                        })
                    }}
                >Yes, just delete it</button>
                <button
                    type="button"
                    onClick={() => {
                        setState({
                            ...state,
                            confirmed: false,
                            value: '',
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
                        setState({
                            ...state,
                            confirmed: false,
                            deleted: false,
                            value: '',
                        })
                    }}
                >
                    Reset, undo the changes
                </button>
            </React.Fragment>
        );
    }
}

export { UseState };