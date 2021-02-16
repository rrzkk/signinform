import Head from "next/head";
import React from "react";
import Signup from "./signup";

import { Provider } from "react-redux";
import { ConfigureStore } from "../redux/configureStore";

const store = ConfigureStore();

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>Sign up</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Signup />
      </div>
    </Provider>
  );
}
