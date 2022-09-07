import React from "react";

function Label(props) {
    return(
        <div className={ 
            props.color === "green" 
            ? "bg-green-100 text-green-600 text-xs font-bold w-fit px-1.5 py-0.5 rounded-sm"
            : "bg-gray-100 text-gray-600 text-xs font-bold w-fit px-1.5 py-0.5 rounded-sm"
        }>
            {props.children}
        </div>
    )
}

export default Label