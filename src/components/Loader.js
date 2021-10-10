import React from "react";
import Loader from "react-loader-spinner";

const SimpleLoader = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <div style={style}>
            <Loader
                type="Oval"
                color="#f8f8f8"
                height={25}
                width={25}
            />
        </div>
    )
}

export default SimpleLoader