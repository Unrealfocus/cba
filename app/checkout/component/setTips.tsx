import { Button } from '@/components/ui/button'
import React from 'react'

const SetTips = () => {
    return (
        <div className="bg-white rounded-lg p-4 shadow space-y-2">
            <p className="text-sm-medium ">TIP</p>
            <div className="grid grid-cols-4 space-x-2">
                <Button variant={'outline'} className="border block h-fit px-3 py-1 rounded text-sm">5%<br /><span className="text-xs">$0.20</span></Button>
                <Button variant={'outline'} className="border  block h-fit px-3 py-1 rounded text-sm">10%<br /><span className="text-xs">$0.40</span></Button>
                <Button variant={'outline'} className="border block h-fit  px-3 py-1 rounded text-sm">15%<br /><span className="text-xs">$0.60</span></Button>
                <Button variant={'outline'} className="border  block h-full px-3 py-1 rounded text-sm">Custom</Button>
            </div>
        </div>

    )
}

export default SetTips