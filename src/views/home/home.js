import Card from "components/card/card";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getListProduct } from "services/product";

import "./home.sass";

function Home() {
  const stateRedux = useSelector((state) => state.app);
  const getProducts = async () => {
    try {
      const res = await getListProduct();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const card = {
    id: 1,
    picture_url:
      "https://vtv1.mediacdn.vn/thumb_w/650/2022/3/13/iphone-13-xanh-9-1647075654479-1647172182216920874045.jpg",
    product_name: "hihihihi",
    barnd: "hhi",
    cost: 123123,
    discount: 10,
    rate: 100,
  };

  return (
    <div className="home_container">
      <div>
        <Card data={card} />
      </div>
    </div>
  );
}

export default Home;
