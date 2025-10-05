import React, { useEffect, useState } from "react";
import NewsCart from "../Components/NewsCart";
import AxiosServices from "../../Api/Axios";

const News = () => {
  const [products, setProducts] = useState([]);
  const api = new AxiosServices("http://localhost:3000/");

  useEffect(() => {
    api.getData("product").then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  return (
    <div className="">
      <div className="text-center mb-[120px] mt-[85px] container mx-auto max-w-[1350px]">
        <h2 className="text-[#2C2929] text-[55px] font-semibold"> Xəbərlər </h2>
      </div>
      <div className="bg-[#F6FAFF]">
        <div className="container mx-auto max-w-[1350px]">
          <div className="grid grid-cols-2 transform -translate-y-10 gap-11">
            {products.map((item, idx) => (
              <NewsCart
                key={idx}
                image={item?.img}
                title={item?.name}
                desc={item?.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
