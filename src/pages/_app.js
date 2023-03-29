import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "sweetalert2/src/sweetalert2.scss";
import Layout from "../../components/Layout";
import { StateContext } from "context/StateContext";
import { wrapper } from "store/store";
import {SessionProvider} from 'next-auth/react'

function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <SessionProvider>
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </SessionProvider>
  );
}

export default wrapper.withRedux(App);
