import Head from "next/head";
import React from "react";
import Link from "next/link";
import Pageright from "./components/pageright"

export default function Login() {
  return (
    <div className="container">
      <Head>
        <title>Log in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pageleft">
        <Link href="/">
          <a>sign up --</a>
        </Link>
      </div>

      <Pageright/>
    </div>
  );
}
