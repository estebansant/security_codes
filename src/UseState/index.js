import React from "react";

function UseState({name}) {

    
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        
        if(loading){
            console.log("start")

            setTimeout(() => {
                setLoading(false);
                console.log("finish")
            }, 3000) 
        }

    }, [loading])

    return (
        <div>
            <h2>Remove {name}</h2>

            <p>Please, write your security code to proceed with this operation</p>

            {error && (
                <p>Error: The security code is not correct</p>
            )}
            {loading && (
                <p>Loading information...</p>
            )}

            <input type="text" placeholder="Security code"></input>

            <button 
                type="button"
                onClick={() => {setLoading(!loading)}}
            >
                Check</button>
        </div>
    )
}

export { UseState };