"use client"
import React from 'react'
import QuantitySelector from './quantitySelector'

const CartItem = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-[20px] items-center'>
                <div>
                    <img
                        src={'https://eadn-wc02-12309146.nxedge.io/wp-content/uploads/2022/04/Thumnail-Chicken-Pot-Pie-WHOLE-PIE-7-1080x675.jpg'}
                        alt={'merchant name'}

                        className="object-cover rounded-[0.75rem] w-[56px] h-[56px]"
                    />
                </div>
                <div>
                    <p className='text-sm-medium capitalize text-black'>Chicken Pie</p>
                    <p className='text-sm-bold capitalize text-black'>$4.99</p>
                </div>
            </div>
            <QuantitySelector />
        </div>
    )
}

export default CartItem