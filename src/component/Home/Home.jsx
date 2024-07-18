import React from "react";
import "./Home.css";
import MuliItemCarousel from "./MuliItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
const Home = () => {
  const restaurant = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="">
      {/* Banner */}
      <section className="banner z-50 relative flex flex-col justify-center items-center">
        {/* Banner */}
        <div className="w-[50vw] z-10 text-center">
          {/* Title */}
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
            Hung Market
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Taste the convience: Food, Fast and Delivered
          </p>
        </div>
        {/* Image background */}
        <div className="cover absolute top-0 left-0 right-0"></div>
      </section>
      {/* Top meals */}
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-xl font-semibold text-gray-400 py-3 pb-10">
          Top meals
        </p>
        <MuliItemCarousel />
      </section>
      {/* Restaurant */}
      <section className="px-5 lg:px-20">
        <p className="text-xl font-semibold text-gray-400 py-3 pb-10">
          Order From Our Handpicked Favourites
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {restaurant.map((item) => (
            <RestaurantCard />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
