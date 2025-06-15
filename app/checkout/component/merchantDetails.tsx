"use client"
import React from 'react'
import Image from 'next/image'

const MerchantDetails = () => {
    return (
        <div className=" bottom-0 left-0 p-4 bg-white rounded-t-lg w-full flex items-center gap-4">
            <div className="">
                <Image
                    src="/images/cover.jpeg"
                    alt="Merchant Logo"
                    width={80}
                    height={80}
                    className="rounded"
                />
            </div>
            <div>
                <h2 className="text-sm-semibold ">Vickys Bubbly Cafe</h2>
                <p className="text-xs-normal text-gray-500">
                    6723 S Crenshaw Blvd #12, Los Angeles, CA, 90043
                </p>
            </div>
        </div>
    )
}

export default MerchantDetails