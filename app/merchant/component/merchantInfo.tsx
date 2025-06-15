import React from 'react'

const MerchantInfo = () => {
    return (
        <div className="relative ">
            <img
                src="https://marketplace.canva.com/EAEtwkoOhsA/1/0/1600w/canva-yellow-and-black-fun-modern-restaurant-food-logo-VEAoyJP0u7A.jpg"
                alt="Banner"
                className="w-full h-[300px]  object-cover"
            />
            <div className=" bottom-0 left-0 bg-white w-full px-6 pt-4  flex items-start gap-4">
                <div className=" bg-white p-[5px] rounded-lg shadow -translate-y-[30px]">
                    <img
                        src="https://img.freepik.com/premium-vector/restaurant-food-logo-design_1016155-13405.jpg?semt=ais_hybrid&w=740"
                        alt="Merchant Logo"

                        className="rounded-lg w-[100px] h-[100px] object-contain"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Vickys Bubbly Cafe</h2>
                    <p className="text-sm-medium text-gray-500">
                        6723 S Crenshaw Blvd #12, Los Angeles, CA, 90043
                    </p>
                    <p className='text-sm-semibold capitalize'>Nigeria</p>
                </div>
            </div>
            <p className='text-sm-bold px-6 -translate-y-[20px]'>0 503.20 mi $101.24 Delivery</p>
            <p className='text-sm-normal px-6'>The best Igbo, Nigerian dishes in LA!</p>
        </div> 
    )
}

export default MerchantInfo