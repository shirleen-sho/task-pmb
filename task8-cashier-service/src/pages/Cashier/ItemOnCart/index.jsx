import React, { useState, useEffect } from 'react';
import ButtonAction from '../../../components/ButtonAction';

const ItemOnCart = ({ index, data, passSubtotalCallback, deleteCallback }) => {

    const [cartItem, setCartItem] = useState(data)

    const handleChangeQuantity = (e) => {
        const newSubtotalPrice = e.target.value * cartItem.price
        setCartItem({
            ...cartItem,
            quantity: e.target.value,
            subtotal: newSubtotalPrice
        })
    }

    const handleDelete = () => {
        deleteCallback(cartItem.id)
    }

    useEffect(() => { // inisialisasi
        passSubtotalCallback(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => { // ketika ada perubahan qty maka subtotal pada parent juga akan diupdate
        passSubtotalCallback(cartItem)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartItem.quantity])

    return (
        <tr className='bg-white hover:text-sky-700 cursor-default'>
            <td className='border border-gray-300 px-4 py-2'>{index+1}</td>
            <td className='border border-gray-300 px-4 py-2'>
                { '[#00' + cartItem.id + '] ' + cartItem.name}
            </td>
            <td className='border border-gray-300 px-4 py-2'>
                <input 
                    type="number" 
                    placeholder='...' 
                    value={cartItem.quantity} 
                    onChange={handleChangeQuantity} 
                    className='px-3 py-1 border border-sky-700 w-full' 
                />
            </td>
            <td className='border border-gray-300 px-4 py-2'>Rp {cartItem.price}</td>
            <td className='border border-gray-300 px-4 py-2'>Rp {cartItem.subtotal}</td>
            <td className='border border-gray-300 px-4 py-2'>
                <ButtonAction color='red' action={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                </ButtonAction>
            </td>
        </tr>
    )
}

export default ItemOnCart