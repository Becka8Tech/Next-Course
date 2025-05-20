import { Component } from "react";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
    <>
    <Navbar />
  return <Component {...pageProps} />;
    </>
}
