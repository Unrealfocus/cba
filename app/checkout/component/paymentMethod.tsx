import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

const PaymentMethod = () => {
    return (
        <div className="bg-white rounded-lg py-4 shadow">
            <p className="text-sm-medium px-4 pb-4">PAYMENT METHOD</p>
            <RadioGroup defaultValue="default">
                <div className="flex justify-between items-center gap-3 px-4">
                    <Label htmlFor="r1">
                        <div className="flex items-center space-x-2 mt-2">
                            <div className="bg-white text-indigo-700 px-3 py-1 rounded-full font-bold">S</div>
                            <div>
                                <p className="text-sm-medium">CateredByAfrica</p>
                                <p className="text-sm text-gray-400">Find African Cuisines, Caterers and Grocery stores near you</p>
                            </div>
                        </div>
                    </Label>
                    <RadioGroupItem value="default" id="r1" />
                </div>
            </RadioGroup>
        </div>
    )
}

export default PaymentMethod