import React from 'react'
import { Card } from '@/components/ui/card'
import {  House } from 'lucide-react'
const SelectLocationCard = () => {
    return (
        <Card className='flex flex-row gap-[10px] p-[10px]'>
            <div className='flex flex-col items-center'>
                <Card className='bg-gray-100 w-fit p-[10px] rounded-[0.75rem]'>
                    <House size={20} />
                </Card>
                <p className='text-[9px] font-[600]'>196 m</p>
            </div>
            <div className='w-full'>
                <div className='flex-between'>
                    <p className='capitalize text-sm-semibold'>home</p>
                    <div className='text-[10px] font-[600] text-green-600 bg-green-100 px-[10px] text-center rounded-[0.3rem] py-[2px]'>Current</div>
                </div>
                <p className='text-[12px] text-gray-500 font-[400] '>6732 S Crenshaw Blvd #12, Los Angeles, CA, 9004</p>
            </div>
        </Card>
    )
}

export default SelectLocationCard