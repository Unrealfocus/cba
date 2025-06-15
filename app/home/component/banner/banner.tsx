"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';


const Banner = () => {
    return (
        <div className='pl-20px'>
            <Carousel
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 aspect-auto-[16/3]">
                        <Card className='p-0'>
                            <img
                                src={'https://img.freepik.com/premium-psd/food-promotional-social-media-banner-design_987701-5310.jpg?semt=ais_hybrid&w=740'}
                                alt={'merchant name'}

                                className="object-cover h-[200px] w-full rounded-[0.75rem]"
                            />
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Card className='p-0'>
                            <img
                                src={'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/akaroa-and-teak-organic-food-banner-template-xr7ovh59e433cb.webp'}
                                alt={'merchant name'}
                                className="object-cover h-[200px] w-full rounded-[0.75rem]"
                            />
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3  rounded-[0.75rem]">
                        <Card className='p-0'>

                            <img
                                src={'https://static.vecteezy.com/system/resources/thumbnails/020/736/011/small/fast-food-banner-cartoon-hot-dog-popcorn-and-donut-coffee-and-pizza-chicken-cola-and-ice-cream-burger-fast-food-restaurant-flyer-vector.jpg'}
                                alt={'merchant name'}
                                className="object-cover h-[200px] w-full rounded-[0.75rem]"
                            />
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Card className='p-0'>
                            <img
                                src={'https://img.freepik.com/premium-psd/hotel-food-banner-design-template_987701-1717.jpg?semt=ais_hybrid&w=740'}
                                alt={'merchant name'}
                                className="object-cover h-[200px] w-full  rounded-[0.75rem]"
                            />
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <Card className='p-0'>

                            <img
                                src={'https://market-resized.envatousercontent.com/previews/files/222187940/Total+add+banner+-+UPDATED.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=123b4ab91134264eb0d468f8bea8464f8189b4672ce3b0becbafbb358089b0e6'}
                                alt={'merchant name'}

                                className="object-cover h-[200px] w-full rounded-[0.75rem]"
                            />
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="top-1/2 left-12 -translate-y-1/2" />
                <CarouselNext className="top-1/2 right-12 -translate-y-1/2" />
            </Carousel>
        </div>
    )
}

export default Banner