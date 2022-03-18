import React from "react";

class Loading extends React.Component {
    
    componentWillUnmount() {
        console.log("component Will Unmount")
    }

    render() {
        return (
            <p>Loading information...</p>
        )
    }
}

export { Loading };