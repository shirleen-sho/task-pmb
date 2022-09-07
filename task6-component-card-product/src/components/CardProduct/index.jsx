import React from "react";
import Label from "../Label";

function CardProduct(props) {
    return(
        <a href={props.data.link_tokopedia} target="_blank" rel="noreferrer" className="relative w-[180px] h-[340px] rounded-xl shadow-md">
            <img src={props.data.cover} className="rounded-t-xl object-cover w-full h-[180px]" alt="Cover Product"/>
            <div className="p-3 flex flex-col gap-1">
                <span className="text-sm line-clamp-2">{props.data.name}</span>
                <span className="text-base font-bold">Rp {props.data.price}</span>
                { props.data.cashback && <Label color="green">Cashback</Label> }
                <div className="flex flex-row gap-1 items-center">
                    <img className="w-auto h-4" src={
                        props.data.status_seller === "power-merchant-pro"
                        ? "https://pbs.twimg.com/media/E2txKPEUcAEyjMB?format=jpg&name=small"
                        : props.data.status_seller === "power-merchant"
                        ? "https://images.tokopedia.net/img/cache/215-square/shops-1/2019/5/20/5745411/5745411_f63cf144-06d6-4136-a693-db7fb68502f2.jpg"
                        : ""
                        } alt="."/>
                    <span className="text-sm text-gray-500">{props.data.location}</span>
                </div>
                <img src="/images/more.png" alt="..." className="w-4 absolute bottom-3 right-3"/>
            </div>
        </a>
    )
}

export default CardProduct