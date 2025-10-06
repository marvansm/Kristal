import { useEffect, useState } from "react";
import AxiosServices from "../../Api/Axios";
import Products from "../Components/products";

const api = new AxiosServices("http://localhost:3000/");

const PopularProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    api.getData("houses").then((data) => {
      if (data) {
        setProduct(data);
      }
    });
  }, []);

  return (
    <div className="bg-[#F6FAFF] pb-[45px]">
      <div className="container mx-auto max-w-[1350px] ">
        <h2 className="text-[#2C2929] text-[35px] font-medium max-w-[800px] mb-[.5rem]">
          Sizi maraqlandıran layihələr
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {product &&
            product.map((item, idx) => (
              <Products
                key={idx}
                image={item?.img}
                title={item?.name}
                price={item?.price}
                location={item?.location}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
