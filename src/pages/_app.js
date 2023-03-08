import React,{useEffect} from 'react';
import { Toaster } from 'react-hot-toast';
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../../components/Layout";
import { StateContext  } from "context/StateContext";

export default function App({ Component, pageProps }) {
   useEffect(() => {
     require("bootstrap/dist/js/bootstrap.bundle.min.js");
   }, []);

  return (
    <StateContext>
    <Layout>
      <Toaster/>
      <Component {...pageProps} />
    </Layout>
    </StateContext>
  );
}
