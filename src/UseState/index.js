import React from "react";

function UseState({name}) {

    const [error, setError] = React.useState(false);

    return (
        <div>
            <h2>Remove {name}</h2>

            <p>Please, write your security code to proceed with this operation</p>

            {error && (
                <p>Error: The security code is not correct</p>
            )}

            <input type="text" placeholder="Security code"></input>

            <button 
                type="button"
                onClick={() => {setError(!error)}}
            >
                Check</button>
        </div>
    )
}

export { UseState };