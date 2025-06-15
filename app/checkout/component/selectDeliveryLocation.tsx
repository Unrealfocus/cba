import { MapPinIcon, ChevronRight, } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import SelectLocationCard from './selectLocationCard'
import { Button } from '@/components/ui/button'



const SelectDelieveryLocation = () => {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <div className="bg-white rounded-lg p-4 shadow">
                    <p className="text-sm-medium">DELIVERY LOCATION</p>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center space-x-2 mt-2">
                            <span className="text-xl"> <MapPinIcon color="#000000" size={16} /></span>
                            <span className="text-sm-normal text-gray-500">Select Address</span>
                        </div>
                        <ChevronRight />
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent className='min-w-[500px]' side="left">
                <SheetHeader>
                    <SheetTitle className='text-lg-semibold'>Select Address</SheetTitle>

                </SheetHeader>
                <div className='space-y-3.5 px-20px'>
                    <SelectLocationCard />
                    <SelectLocationCard />
                    <SelectLocationCard />
                </div>
                <div className='px-20px w-full'>
                    <Button className='w-full'>
                        Add New Address
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SelectDelieveryLocation