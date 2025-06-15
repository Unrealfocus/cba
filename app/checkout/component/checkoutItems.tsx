"use client"
import CartItem from '@/app/home/component/cart/cartItem'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useRouter } from "next/navigation";

const CheckOutItems = () => {
    const router = useRouter();
    return (
        <div className='space-y-4 bg-white rounded-lg p-[20px]'>
            <div className="space-y-4 mt-4 overflow-y-scroll max-h-[50vh]">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <Button variant={'outline'} onClick={() => router.push("/merchant")} className="">+ Add Items</Button>
            <Input type="text" placeholder="Enter message here" className="  text-[12px] text-[#A0A0A0]  placeholder:font-serif placeholder:text-gray-500 dark:placeholder-gray-400 dark:text-white " />
        </div>
    )
}

export default CheckOutItems