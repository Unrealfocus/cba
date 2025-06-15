"use client"
import React from 'react'
import { Card } from '@/components/ui/card'
import { useRouter } from "next/navigation";

const MerchantsCard = () => {
    const router = useRouter();
    return (
        <Card onClick={() => router.push("/merchant")} className='relative gap-[0.75rem] pb-[0.75rem] pt-0'>
            <div>
                <img
                    src={'https://platform.ny.eater.com/wp-content/uploads/sites/6/chorus/uploads/chorus_asset/file/25858901/Spread___AJB.jpg?quality=90&strip=all&crop=0.0052224775433487,0,99.989555044913,100&w=2400'}
                    alt={'merchant name'}

                    className="object-contain rounded-t-xl"
                />
            </div>
            <div className='flex gap-[10px]'>
                <div className='pl-[0.75rem]'>
                    <img
                        src={'/images/south.jpeg'}
                        alt={'merchant name'}
                        className="object-cover rounded-[0.75rem] w-[56px] h-[56px]"
                    />
                </div>
                <div>
                    <p className='text-sm-bold capitalize'>name</p>
                    <p className='text-sm-normal capitalize text-gray-500'>0  . mi .$4.99 amount delivery</p>
                    <p className="text-xs-normal capitalize text-gray-400">nigeria</p>
                </div>
                <div className='absolute bg-black/55 top-0 text-white  w-full text-sm-medium capitalize text-center backdrop-opacity-10 rounded-t-xl'>opening next on thursday by 7pm</div>
            </div>
        </Card>
    )
}

export default MerchantsCard