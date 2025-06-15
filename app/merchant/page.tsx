"use client"
import Image from "next/image";
import Nav from "../home/component/nav/nav";
import OpeningAlert from "./component/openingAlert";
import MerchantInfo from "./component/merchantInfo";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function MerchantPage() {
    const categories = [
        "Pastries",
        "Appetizers",
        "Pepper Soups",
        "African Grilled/Fried Meats/ Fish",
        "Combo Entrees",
        "Ethnic Soups/Stew",
        "À La Carte",
    ];

    const products = [
        {
            name: "Salmon Fish Pie",
            price: "$4",
            image: "https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/library/discover-and-learn/food-recipes/fish-pie-1358602.jpg?auto=webp&width=767&crop=16:9&dpr=2%202x"
        },
        {
            name: "Chin Chin Bag",
            price: "$2",
            image: "https://thumbs.dreamstime.com/b/west-african-popular-food-appetizer-chin-chin-fried-crispy-doug-west-african-popular-food-appetizer-chin-chin-fried-crispy-dough-126945675.jpg"
        },
        {
            name: "Beef Pie",
            price: "$3",
            image: "https://neighborfoodblog.com/wp-content/uploads/2015/03/how-to-make-beef-pot-pie-9.jpg"
        },
        {
            name: "Veggie Pie",
            price: "$3",
            image: "https://www.feastingathome.com/wp-content/uploads/2021/12/Vegetable-pot-pie-21-380x570.jpg"
        },
       
        {
            name: "Turkey Meat Pie",
            price: "$3",
            image: "https://carlsbadcravings.com/wp-content/uploads/2023/11/Turkey-Pot-Pie-13a.jpg"
        },
        
    ];

    return (
        <div className="bg-white min-h-screen">
            <Nav />
            <OpeningAlert />
            <MerchantInfo />
            <div className="px-6 py-6">
                <Button  className="bg-[#f2f2f2] w-full flex justify-start hover:bg-[#f2f2f2] py-4">
                    <Search color="#4a5565"/>
                    <p className="text-gray-600">Vickys Bubbly Cafe</p>
                </Button>

            </div>
            {/* Tabs */}
            <div className="overflow-x-auto border-b mt-2 px-4">
                <ul className="flex gap-6 py-2 text-sm whitespace-nowrap">
                    {categories.map((cat, i) => (
                        <li key={i} className="hover:text-primary cursor-pointer">
                            {cat}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Section title */}
            <div className="px-4 py-3">
                <h3 className="text-lg font-semibold">Pastries</h3>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-8">
                {products.map((product, i) => (
                    <div
                        key={i}
                        className="border rounded-lg shadow-sm overflow-hidden bg-white"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            // width={300}
                            // height={200}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-2">
                            <h4 className="text-sm font-medium">{product.name}</h4>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-sm-bold">{product.price}</span>
                                <Button variant={'outline'} className="text-green-600 text-sm-medium border shadow-sm border-white px-2 py-1 rounded ">
                                    ADD +
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
