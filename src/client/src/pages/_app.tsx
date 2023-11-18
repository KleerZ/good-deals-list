import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {HeaderComponent} from "@/components/header.component";
import {inter} from "@/pages/index";
import {store} from "@/store";
import React from "react";
import {BrowserRouter, Routes} from "react-router-dom";
import {Provider} from "react-redux";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <div className={`no-indents body ${inter.className}`}>
        <HeaderComponent></HeaderComponent>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}