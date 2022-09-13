import React, { useState, useEffect } from 'react';
import InventoryCreate from './create';
import ButtonAction from '../../components/ButtonAction';

const Inventory = () => {
    // untuk mengatur buka tutup form Create
    const [showCreate, setShowCreate] = useState(false)
    const handleShow = () => { setShowCreate(true) }
    const handleClose = () => { setShowCreate(false) }

    // untuk menampilkan data jika sebelumnya di localStorage sudah ada tersimpan
    let inventory = []
    if (JSON.parse(localStorage.getItem('inventoryList')) !== null) {
        inventory = JSON.parse(localStorage.getItem('inventoryList'))
    }
    const [inventoryList, setInventoryList] = useState(inventory);

    // untuk menghandle callback dari child component setelah submit form
    const handleCallback = (childData) => {
        let updateList = [...inventoryList, { 
            id: inventoryList.length + 1, 
            name: childData.item_name,
            qty: childData.item_qty
        }];
        setInventoryList(updateList);
    }
    
    // untuk menghandle penghapusan sesuai id item yang dipilih
    const handleDelete = (id) => {
        let filteredList = inventoryList.filter(item => { return item.id !== id ; });
        setInventoryList(filteredList);
    }
    
    // setiap ada perubahan pada state inventoryList maka akan disimpan dalam localStorage
    useEffect(() => {
        if (inventoryList === []) {
            localStorage.setItem('inventoryList', JSON.stringify([]))
        } else {
            localStorage.setItem('inventoryList', JSON.stringify(inventoryList))
        }
    }, [inventoryList])

    return (
        <div className='flex flex-col gap-4'>
            <span className='text-3xl font-bold'>Inventory List</span>
            <div className='flex flex-row gap-2'>
                <ButtonAction color='green' action={handleShow}>&#43; Create</ButtonAction>
                { showCreate && <ButtonAction color='red' action={handleClose}>&#215; Close</ButtonAction> }
            </div>
            { showCreate && <InventoryCreate parentCallback={handleCallback}/> }
            <div className=''>
                { inventoryList && inventoryList.length > 0 
                    ? <div className='flex flex-col gap-2'>
                        { inventoryList.map((i) => 
                            <div key={i.id} className='px-4 py-2 w-full flex flex-row items-center justify-between bg-orange-50 hover:bg-orange-100'>
                                <div className='w-[240px] sm:w-[320px] flex flex-row items-center justify-between'>
                                    <span>{i.name}</span>
                                    <span>{i.qty}</span>
                                </div>
                                <ButtonAction color='red-outline' action={() => handleDelete(i.id)} key={i.id}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </ButtonAction>
                            </div>
                        )
                        }
                    </div>
                    : <div className='flex flex-col items-center gap-2 p-4'>
                        <img src='./assets/images/empty-box.png' className='h-20 w-auto' alt='Empty List'/>
                        <span>Empty</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Inventory ;