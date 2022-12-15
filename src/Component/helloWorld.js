import React from 'react';

const Greet = props => {
    console.log(props.name)
    return (
        <div className = "greet">
            <h1>Hello {props.name} </h1>
            {props.children}
        </div>
    )
}
export default Greet;