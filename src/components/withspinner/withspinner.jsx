import React from "react";


const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    if (isLoading) {
        return (
        <div>
            ASDFASDFASDF
        </div>
        )
    }
    
    
    return (<WrappedComponent {...otherProps}/>)
    
};

export default WithSpinner;