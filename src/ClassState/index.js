import React from "react";

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false
        }
    }

    render() {
        return (
            <div>
                <h2>Remove {this.props.name}</h2>

                <p>Please, write your security code to proceed with this operation</p>

                {this.state.error && (
                    <p>Error: The security code is not correct</p>
                )}

                <input type="text" placeholder="Security code"></input>

                <button 
                    type="button"
                    onClick={() => this.setState({error: !this.state.error})}
                    >
                        Check</button>
            </div>
        )
    }
}

export { ClassState };