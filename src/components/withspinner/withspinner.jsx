import React from "react";


const WithSpinner = WrappedComponent => ({ isLoading, shouldLoad, ...otherProps}) => {
    if (isLoading && shouldLoad) {
        return (
        <div className='SpinnerOverlay'>
            <div className='SpinnerContainer' />
        </div>
        )
    }
    if (isLoading && !shouldLoad) {
        return (<div/>)
    }
    
    return (<WrappedComponent {...otherProps}/>)
    
};

export default WithSpinner;