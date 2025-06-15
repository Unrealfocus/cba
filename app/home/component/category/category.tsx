import React from 'react'
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
const Category = () => {
    return (
        <section className="py-20px pl-20px flex flex-col gap-[20px]">
            <h3 className="  text-base-semibold">Browse Categories</h3>
            <Carousel>
                <CarouselContent>
                {[
                    { name: "Nigerian", flag: "/nigeria.svg" },
                    { name: "Liberian", flag: "/mali.svg" },
                    { name: "Ethiopian", flag: "/morocco.svg" },
                    { name: "Kenyan", flag: "/south-africa.svg" },
                    { name: "Cameroon", flag: "/tunisia.svg" },
                    { name: "Ghanaian", flag: "/ghana.svg" },
                    { name: "Nigerian", flag: "/nigeria.svg" },
                    { name: "Liberian", flag: "/mali.svg" },
                    { name: "Ethiopian", flag: "/morocco.svg" },
                    { name: "Kenyan", flag: "/south-africa.svg" },
                    { name: "Cameroon", flag: "/tunisia.svg" },
                    { name: "Ghanaian", flag: "/ghana.svg" },
                    { name: "Liberian", flag: "/mali.svg" },
                    { name: "Ethiopian", flag: "/morocco.svg" },
                    { name: "Kenyan", flag: "/south-africa.svg" },
                    { name: "Cameroon", flag: "/tunisia.svg" },
                    { name: "Ghanaian", flag: "/ghana.svg" },
                    { name: "Liberian", flag: "/mali.svg" },
                    { name: "Ethiopian", flag: "/morocco.svg" },
                    { name: "Kenyan", flag: "/south-africa.svg" },
                    { name: "Cameroon", flag: "/tunisia.svg" },
                    { name: "Ghanaian", flag: "/ghana.svg" },

                ].map((cat, index) => (
                    <CarouselItem className='basis-[120px]'>
                        <div key={index} className="flex flex-col gap-[20px] items-center">
                            <Image
                                src={cat.flag}
                                alt={cat.name}
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                            <span className="text-sm">{cat.name}</span>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="-top-[30px] left-[91%] " />
                <CarouselNext className="-top-[30px] right-[2%] -translate-y-1/2" />
            </Carousel>
        </section>
    )
}

export default Category