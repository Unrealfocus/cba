"use client"

import Nav from "./component/nav/nav";
import Banner from "./component/banner/banner";
import Category from "./component/category/category";
import MerchantsCard from "./component/merchant/merchantCard";


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col gap-[10px] text-black">
      <Nav />
      <Banner />
      <Category />

      <section className="flex flex-col gap-[20px] p-20px">
        <h3 className="text-base-semibold ">Nearby Merchants</h3>
        <div className="grid grid-cols-3 gap-4">
          <MerchantsCard />
          <MerchantsCard />
          <MerchantsCard />
        </div>
      </section>
    </div >
  );
}
