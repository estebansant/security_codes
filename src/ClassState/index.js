import React from "react";
import { Loading } from '../Loading';

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false,
        }
    }

    // UNSAFE_componentWillMount() {
    //     console.log("component Will Mount")
    // }

    // componentDidMount() {
    //     console.log("component Did Mount")
    // }

    componentDidUpdate() {
        if(this.state.loading){
            console.log("start")

            setTimeout(() => {
                this.setState({loading: false});
                console.log("finish")
            }, 3000) 
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

                {this.state.loading && (
                    <Loading />
                )}

                <input type="text" placeholder="Security code"></input>

                <button 
                    type="button"
                    onClick={() => this.setState({loading: !this.state.loading})}
                    >
                        Check</button>
            </div>
        )
    }
}

export { ClassState };