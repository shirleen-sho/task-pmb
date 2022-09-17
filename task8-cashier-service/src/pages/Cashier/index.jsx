import React, { useState } from 'react';
import ButtonAction from '../../components/ButtonAction'
import ItemOnCart from './ItemOnCart'
import UserPayment from './UserPayment';
import itemsOption from '../../items.json'

const Cashier = () => {
    const [optionItems, setOptionItems] = useState(itemsOption)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const [selectedItem, setSelectedItem] = useState(1)
    const handleChangeSelectedItem = (e) => {
        setSelectedItem(parseInt(e.target.value))
    }

    // fungsi ketika item yang dipilih mau dimasukkan dalam keranjang
    const handleAddSelectedItem = (e) => {
        e.preventDefault()
        const data = optionItems.filter(i => { return i.id === selectedItem; })
        const dataSelectedItem = {
            ...data[0],
            quantity: 1,
            subtotal: data[0].price
        }
        setCartItems([...cartItems, dataSelectedItem])
        const dataUpdate = optionItems.filter(i => { return i.id !== selectedItem; })
        setOptionItems(dataUpdate)
        setSelectedItem(dataUpdate[0].id)
    }

    // fungsi untuk mengupdate state subtotal
    const handlePassSubtotal = (data) => {
        const find = cartItems.filter((i) => { return i.id === data.id })
        if (find.length > 0) {
            const updatedList = cartItems.map((i) => { return i.id === data.id ? data : i })
            setCartItems(updatedList)
            handleCountTotalPrice(updatedList)
        } else {
            setCartItems([...cartItems, data])
            handleCountTotalPrice([...cartItems, data])
        }
    }

    // fungsi untuk menghitung total harga dari seluruh item dalam cart
    const handleCountTotalPrice = (list) => {
        let totalResult = 0
        list.map((i) => { return totalResult += i.subtotal }) // menghitung masing" subtotal
        setTotalPrice(totalResult)
    }

    // fungsi untuk menghapus item dari cart
    const handleDeleteItemFromCart = (id) => {
        const updateCart = cartItems.filter((c) => { return c.id !== id })
        setCartItems(updateCart)
        handleCountTotalPrice(updateCart)

        const addBackToOption = cartItems.filter((c) => { return c.id === id })
        setOptionItems([ ...optionItems, addBackToOption[0] ])
    }

    return (
        <div className='flex flex-col gap-6'>
            <span className='text-3xl font-bold'>Cashier</span>
            <form className='flex flex-row gap-3 items-center'>
                <select value={selectedItem} onChange={handleChangeSelectedItem} className='selectBox min-w-[400px] px-3 py-2.5 border-2 border-dashed border-sky-700 focus:border-solid focus:border-green-600 rounded-md'>
                    <option disabled="disabled">-- Pilih Item --</option>
                    { optionItems.length > 0 && optionItems.map((data) =>
                        <option key={"option"+data.id} value={data.id}>
                            { '[#00' + data.id + '] ' + data.name}
                        </option>
                    )}
                </select>
                <ButtonAction color='green' action={handleAddSelectedItem}>+ Tambah ke Keranjang</ButtonAction>
            </form>
             { cartItems && cartItems.length > 0 
                ? <table className='table-fixed border border-gray-300 border-collapse text-justify'>
                    <thead className='bg-sky-700 text-white'>
                        <tr>
                            <th className='border border-gray-300 px-4 py-2 w-[60px]'>No</th>
                            <th className='border border-gray-300 px-4 py-2'>Item</th>
                            <th className='border border-gray-300 px-4 py-2 w-[160px]'>Jumlah</th>
                            <th className='border border-gray-300 px-4 py-2 w-[200px]'>Harga</th>
                            <th className='border border-gray-300 px-4 py-2 w-[200px]'>Subtotal</th>
                            <th className='border border-gray-300 px-4 py-2 w-[92px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { cartItems.map((data, index) =>
                            <ItemOnCart 
                                key={"cart"+data.id} 
                                index={index} 
                                data={data} 
                                passSubtotalCallback={handlePassSubtotal} 
                                deleteCallback={handleDeleteItemFromCart}
                            />
                        )}
                        <tr className='bg-sky-700 bg-opacity-25'>
                            <td colSpan={4} className='border border-gray-300 px-4 py-2 font-bold'>Total</td>
                            <td colSpan={2} className='border border-gray-300 px-4 py-2 font-bold'>Rp {totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
                : <div className='flex flex-col items-center gap-2 p-4'>
                    <img src='./assets/images/empty-box.png' className='h-20 w-auto' alt='Empty List'/>
                    <span>Empty</span>
                </div>
             }
            { cartItems && cartItems.length > 0 && <UserPayment priceToPay={totalPrice}/> }
        </div>
    )
}

export default Cashier