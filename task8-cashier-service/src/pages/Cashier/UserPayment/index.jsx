import React, { useState, useEffect } from "react"

const UserPayment = ({ priceToPay }) => {
    const [userPay, setUserPay] = useState(0) // uang yang dibayarkan oleh pembeli
    const [userChange, setUserChange] = useState(0) // uang kembalian yang akan diterima pembeli

    // fungsi untuk perhitungan uang kembalian yang akan terupdate setiap ada 
    // perubahan pada uang yang dibayarkan pembeli maupun total harga item yang harus dibayar
    useEffect(() => {
        let change = parseInt(userPay) - parseInt(priceToPay)
        setUserChange(change)
    }, [userPay, priceToPay])

    return (
        <div className="flex flex-row justify-center my-6 ">
            <div className="flex flex-row justify-between w-1/2 bg-sky-100 bg-opacity-75 px-6 py-4">
                <div className="flex flex-row gap-2 items-center">
                    <span>Pembayaran :</span>
                    <div class="relative flex flex-wrap items-stretch">
                        <span class="z-10 h-full absolute text-center pt-px pl-1.5 text-sky-800 font-bold bg-transparent items-center justify-center">
                            Rp
                        </span>
                        <input 
                            type="number" 
                            value={userPay} 
                            onChange={(e) => setUserPay(e.target.value)}
                            className="pl-8 border border-black w-[150px] text-sky-800 font-bold bg-transparent"
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <span>Kembalian :</span>
                    <span className="py-0.5 text-sky-800 font-bold">Rp {userChange}</span>
                </div>
            </div>
        </div>
    )
}

export default UserPayment