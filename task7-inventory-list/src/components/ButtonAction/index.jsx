import React from 'react';

const ButtonAction = (props) => {
    return (
        <>
        { props.color === 'orange'
            ? <button onClick={props.action} disabled={props.disabled} className='bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md disabled:cursor-not-allowed disabled:bg-gray-300'>{props.children}</button>
            : props.color === 'green'
            ? <button onClick={props.action} className='bg-green-600 hover:bg-green-700 text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : props.color === 'red'
            ? <button onClick={props.action} className='bg-red-600 hover:bg-red-700 text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : props.color === 'red-outline'
            ? <button onClick={props.action} className='text-red-600 border border-red-600 hover:bg-red-700 hover:text-white text-sm font-semibold w-fit h-fit px-5 py-1.5 rounded-md'>{props.children}</button>
            : <></>
        }
        </>
    )
}

export default ButtonAction ;