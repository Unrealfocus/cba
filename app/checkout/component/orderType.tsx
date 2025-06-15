"use client"
import React from 'react'
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import { HandCoins } from 'lucide-react'
import { Separator } from '@/components/ui/separator'


const OrderType = () => {
    return (
        <div className="bg-white rounded-lg pb-4 shadow space-y-2">
            <p className="text-sm-medium px-4 pb-4">ORDER TYPE</p>
            <RadioGroup defaultValue="comfortable">
                <div className="flex justify-between items-center gap-3 px-4">
                    <Label htmlFor="r1">
                        <div className="flex items-center space-x-2">
                            <span>🚴‍♂️</span>
                            <span className='text-sm-semibold'>Delivery</span>
                        </div>
                    </Label>
                    <RadioGroupItem value="default" id="r1" />
                </div>
                <Separator className="" />
                <div className="flex justify-between items-center gap-3 px-4">
                   
                    <Label htmlFor="r2">
                        <div className="flex items-center space-x-2 ">
                            <span><HandCoins /></span>
                            <span className='text-sm-semibold'>Pickup</span>
                        </div>
                    </Label>
                    <RadioGroupItem value="comfortable" id="r2" />
                </div>
            </RadioGroup>
        </div>
    )
}

export default OrderType