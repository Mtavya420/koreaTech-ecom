import React from "react";

import { client } from "lib/client";

import FooterBanner from "components/FooterBanner";
import HeroBanner from "components/HeroBanner";
import Product from "../../components/Product";

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData && bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Seller Phones</h2>
      <p>Explore our latest collection of phones from top brands.</p>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
