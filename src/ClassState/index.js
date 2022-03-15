import React from "react";

class ClassState extends React.Component {
    render() {
        return (
            <div>
                <h2>Remove ClassState</h2>

                <p>Please, write your security code to proceed with this operation</p>

                <input type="text" placeholder="Security code"></input>

                <button type="button">Check</button>
            </div>
        )
    }
}

export { ClassState };