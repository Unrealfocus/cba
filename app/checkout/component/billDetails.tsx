import { ChevronRight, NotepadText } from 'lucide-react'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from '@/components/ui/separator'

const BillDetails = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="bg-white rounded-lg p-4 shadow space-y-4">
                    <p className="text-lg-semibold">Bill Details</p>
                    <div className='flex justify-between items-center'>
                        <p className="text-sm-semibold flex items-center gap-[5px]"><NotepadText />Grand Total</p>
                        <p className="text-sm-semibold flex items-center">$4  <ChevronRight size={10} /></p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>  <p className="text-sm-semibold flex items-center gap-[5px]"><NotepadText />Bill Details</p></DialogTitle>
                </DialogHeader>
                <div className='p-0 space-y-4'>
                    <Separator className="border-dashed" />
                    <p className="text-sm-semibold flex justify-between ">Subtotal<span>$6</span></p>
                    <p className="text-sm-semibold flex justify-between ">Delivery fee<span>$0</span></p>
                    <Separator className="border-dashed" />
                    <p className="text-sm-semibold flex items-center justify-between gap-[5px]">Grand Total <span>$6</span></p>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default BillDetails