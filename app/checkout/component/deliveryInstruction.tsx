import { Button } from '@/components/ui/button'
import { DoorOpen, BellOff, PhoneOff } from 'lucide-react'
import React from 'react'

const DeliveryInstruction = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow space-y-3">
            <p className="text-sm-medium ">DELIVERY INSTRUCTIONS</p>
            <div className="flex space-x-2">
                <Button variant={'outline'} className="border  rounded px-4 py-2 text-sm"><DoorOpen /> Leave at door</Button>
                <Button variant={'outline'} className="border  rounded px-4 py-2 text-sm"><BellOff /> Do not ring bell</Button>
                <Button variant={'outline'} className="border  rounded px-4 py-2 text-sm"><PhoneOff /> Do not call</Button>
            </div>
        </div>

    )
}

export default DeliveryInstruction