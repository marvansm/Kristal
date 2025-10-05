import React from "react";
import Products from "../Components/products";

const PopularProducts = () => {
  return (
    <div className="bg-[#F6FAFF] pb-[45px]">
      <div className="container mx-auto max-w-[1350px] ">
        <h2 className="text-[#2C2929] text-[35px] font-medium max-w-[800px] mb-[.5rem]">
          Sizi maraqlandıran layihələr
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
