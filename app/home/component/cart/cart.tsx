import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ShoppingCart } from "lucide-react";
import CartItem from './cartItem';
import { useRouter } from "next/navigation";

const Cart = () => {
    const router = useRouter();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="flex border-none text-xs-semibold">
                    <ShoppingCart /> Cart
                </Button>
            </SheetTrigger>
            <SheetContent className='min-w-[500px]'>
                <SheetHeader className='flex items-center'>
                    <SheetTitle className='text-center text-lg-semibold'>Cart</SheetTitle>
                </SheetHeader>
                <SheetDescription>

                    <CartItem />
                </SheetDescription>
                <SheetFooter>
                    <Button onClick={() => router.push("/checkout")} type="submit" className='flex justify-between items-center '>
                        <div className='flex w-full text-xs-normal items-center gap-2 capitalize'>
                            2 items
                            <div className='h-4 border-r border-white'></div>
                            $6.00
                        </div>
                        <span className='uppercase'>Checkout</span>
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Cart