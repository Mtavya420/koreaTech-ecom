import React, { useState, useEffect } from "react";

import { client } from "lib/client";
import { wrapper } from "store/store";
import { selectAuthState, setAuthState } from "store/authSlice";
import { useDispatch, useSelector } from "react-redux";

import FooterBanner from "components/FooterBanner";
import HeroBanner from "components/HeroBanner";
import Product from "../../components/Product";
import { selectProductsState } from "store/productsSlice";

const Home = ({ products, bannerData }) => {
  const authState = useSelector(selectAuthState);
  const { searchProduct } = useSelector(selectProductsState);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        {!searchProduct && (
          <HeroBanner
            heroBanner={bannerData && bannerData.length && bannerData[0]}
          />
        )}
        <div className="products-heading">
          <h2>Best Seller Phones</h2>
          <p>Explore our latest collection of phones from top brands.</p>
        </div>
        <div className="products-container">
          {searchProduct
            ? products
                .filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(searchProduct.toLowerCase())
                )
                .map((product) => (
                  <Product key={product._id} product={product} />
                ))
            : products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
        </div>
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state in redux from fetched data...
      await store.dispatch(setAuthState(true));
      console.log("State on server", store.getState());
      const query = '*[_type == "product"]';
      const products = await client.fetch(query);

      const bannerQuery = '*[_type == "banner"]';
      const bannerData = await client.fetch(bannerQuery);

      return {
        props: { products, bannerData },
      };
    }
);

export default Home;
