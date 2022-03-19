import React from "react";
import { Loading } from '../Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {

    /*defining states*/

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: false, 
            loading: false,
            deleted: false,
            confirmed: false,
        }
    }

    // UNSAFE_componentWillMount() {
    //     console.log("component Will Mount")
    // }

    // componentDidMount() {
    //     console.log("component Did Mount")
    // }


    /*updating the value of the states*/

    componentDidUpdate() {
        if(this.state.loading){
            console.log("start")

            setTimeout(() => {
                if(this.state.value === SECURITY_CODE){
                    this.setState({error: false, loading: false, confirmed: true})
                } else {
                    this.setState({ error: true, loading: false })
                }
                console.log("finish")
            }, 3000) 
        }
    }
    
    render() {
        if(!this.state.deleted && !this.state.confirmed){
                return (
                    <div>
                        <h2>Remove {this.props.name}</h2>
        
                        <p>Please, write your security code to proceed with this operation</p>
        
        
                        {/*Defining what happens when error and loading are true*/}
        
                        {(this.state.error && !this.state.loading) && (
                            <p>Error: The security code is not correct</p>
                        )}
        
                        {this.state.loading && (
                            <Loading />
                        )}
        
                        <input
                            type="text"
                            placeholder="Security code"
                            disabled={this.state.loading}
                            value = {this.state.value}
                            onChange = {(event) => {
                                this.setState({value: event.target.value});
                            }}
                        ></input>
        
                        <button 
                            type="button"
                            onClick={() => this.setState({loading: !this.state.loading})}
                            >
                                Check</button>
                    </div>
                )
            
            } else if (this.state.confirmed && !this.state.deleted){
                return(
                    <React.Fragment>
                        <p>Please confirm your action. Are you sure you want to delete {this.props.name}?</p>
                        <button
                            type="button"
                            onClick={() => {
                                this.setState({deleted: true,})
                            }}
                        >Yes, just delete it</button>
                        <button
                            type="button"
                            onClick={() => {
                                this.setState({
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
                                this.setState({
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
    
}

export { ClassState };