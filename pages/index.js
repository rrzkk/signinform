import Head from "next/head";
import React from "react";
import Signup from "./signup";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sign up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </div>
  );
}
