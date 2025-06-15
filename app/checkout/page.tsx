
import React from 'react'
import Nav from '../home/component/nav/nav'
import SelectDelieveryLocation from './component/selectDeliveryLocation'
import OrderType from './component/orderType'
import DeliveryType from './component/deliveryType'
import PaymentMethod from './component/paymentMethod'
import MerchantDetails from './component/merchantDetails'
import CheckOutItems from './component/checkoutItems'
import Coupons from './component/coupons'
import DeliveryInstruction from './component/deliveryInstruction'
import SetTips from './component/setTips'
import { Button } from '@/components/ui/button'
import BillDetails from './component/billDetails'


const page = () => {
    return (
        <div>
            <Nav />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-[40px]">
                <div className='p-[20px] bg-[#F7F7F7] h-fit rounded-lg border  shadow'>
                    <div className="space-y-4">
                        <SelectDelieveryLocation />
                        <OrderType />
                        <DeliveryType />
                        <PaymentMethod />
                    </div>
                </div>
                <div className="space-y-4 ">
                    <div className="bg-white rounded-lg border  shadow ">
                        <MerchantDetails />
                        <div className='bg-[#F7F7F7] rounded-lg p-[20px] space-y-4'>
                            <CheckOutItems />
                            <Coupons />
                            <DeliveryInstruction />
                            <SetTips />
                            <BillDetails />
                            <Button className="text-white w-full">Pay</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page