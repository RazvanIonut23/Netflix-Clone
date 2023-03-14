import React, { useEffect, useState } from "react";
import db from "../firebase";
import s from "./PlansScreen.module.css";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(products);

  return (
    <div className={s.plansScreen}>
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className={s.plansScreen_Plan}>
            <div className={s.plansScreen_Info}>
              <h5>{productData.name}dasdasd</h5>
              <h6>{productData.description}dasdsa</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
