import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

const DeliveryType = () => {
    return (
        <div className="bg-white rounded-lg py-4 shadow">
            <p className="text-sm-medium px-4 pb-4">DELIVERY TYPE</p>
            <RadioGroup defaultValue="default">
                <div className="flex justify-between items-center gap-3 px-4">
                    <Label htmlFor="r1">
                        <div className="flex items-center space-x-2">
                            <span>⚡</span>
                            <span className="font-semibold">ASAP delivery</span>
                        </div>
                    </Label>
                    <RadioGroupItem value="default" id="r1" />
                </div>
            </RadioGroup>
        </div>
    )
}

export default DeliveryType