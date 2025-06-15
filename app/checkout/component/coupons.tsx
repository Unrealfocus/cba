import { ChevronRight } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { Card } from '@/components/ui/card'
const cls = {
    searchInputContainer:
        "flex border border-[#e5e7eb] h-[43px]  bg-[white] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600",

    sheetInputContainer:
        "flex border border-[#e5e7eb] h-[43px] pr-2  rounded-lg bg-[white] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 w-full",

    input:
        "block w-full px-[20px] ps-1 text-[12px] border-none outline-none text-[#A0A0A0]  placeholder:font-serif placeholder:text-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
}

const Coupons = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="bg-white rounded-lg p-4 shadow flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span>🎟️</span>
                        <p className="text-sm-semibold">Use Coupons</p>
                    </div>
                    <span className="text-xl">  <ChevronRight /></span>
                </div>
            </SheetTrigger>
            <SheetContent className='min-w-[500px]'>
                <SheetHeader>
                    <SheetTitle>Apply Coupoun</SheetTitle>

                </SheetHeader>
                <div className='space-y-4 p-[20px]'>
                    <div className={`${cls.searchInputContainer}`}>
                        <input
                            type="text"
                            className={cls.input}
                            placeholder="Enter coupon here"
                        />
                        <div className="flex items-center ">
                            <Button variant={'outline'} className='border-none text-muted-foreground'>Apply</Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <Separator className="flex-1" />
                        <p className="text-base-semibold ">
                            Available Coupons
                        </p>
                        <Separator className="flex-1" />
                    </div>
                    <Card className='shadow-none rounded-none px-[20px]'>
                        <div className="flex justify-between items-center">
                            <p >CBA20</p>
                            <Button variant={'outline'} className='border-none text-primary shadow-none'>Apply</Button>
                        </div>
                        <Separator className="border-dashed" />
                        <p className='text-gray-400 text-sm-medium'>Get 20% off on delivery when you order items worth $25 or more</p>
                    </Card>
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default Coupons