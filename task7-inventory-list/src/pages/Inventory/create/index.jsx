import React, { useState, useEffect } from 'react';
import ButtonAction from '../../../components/ButtonAction';
import ValidationRequired from '../../../components/ValidationRequired';

const InventoryCreate = (props) => {
    const [formInput, setFormInput] = useState({
        item_name : '',
        item_qty : ''
    })

    const [formValid, setFormValid] = useState(false)
    const [isEmpty, setIsEmpty] = useState({
        item_name : true,
        item_qty : true
    })

    useEffect(() => {
        if (isEmpty.item_name === false && isEmpty.item_qty === false) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [isEmpty])

    const handleChange = (e) => {
        setFormInput({ ...formInput, [e.target.id] : e.target.value })
        if (e.target.value !== '') {
            setIsEmpty({ ...isEmpty, [e.target.id] : false })
        } else {
            setIsEmpty({ ...isEmpty, [e.target.id] : true })
        }
    }

    const handleSave = (e) => {
        e.preventDefault();
        props.parentCallback(formInput);
        setFormInput({
            item_name : '',
            item_qty : ''
        })
        setIsEmpty({
            item_name : true,
            item_qty : true
        })
        setFormValid(false)
    }

    return (
        <>
            <form className='flex flex-col sm:flex-row gap-2 slidedown'>
                <div className='flex flex-col gap-1'>
                    <input type='text' id='item_name' name='itemName_field' value={formInput.item_name} onChange={handleChange} placeholder='Name' className='text-sm px-2.5 py-1.5 border border-gray-500 rounded-sm w-[240px]'/>
                    { isEmpty.item_name && <ValidationRequired/> }
                </div>
                <div className='flex flex-col gap-1'>
                    <input type='number' id='item_qty' name='itemQty_field' value={formInput.item_qty} onChange={handleChange} placeholder='Quantity' className='text-sm px-2.5 py-1.5 border border-gray-500 rounded-sm w-[120px]'/>
                    { isEmpty.item_qty && <ValidationRequired/> }
                </div>
                <ButtonAction color='orange' action={handleSave} disabled={!formValid}>Save</ButtonAction>
            </form>
        </>
    )
}

export default InventoryCreate ;