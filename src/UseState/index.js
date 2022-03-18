import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({name}) {

    const[state, setState] = React.useState({
        value: '',
        error: false, 
        loading: false,
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
                        loading: false})
                }

                console.log("finish")

            }, 3000) 
        }

    }, [state.loading])

    return (
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
    )
}

export { UseState };