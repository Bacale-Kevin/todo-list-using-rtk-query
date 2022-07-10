import Head from 'next/head'
import { AppProps } from 'next/app'
import '../styles/index.css'
import "mdbreact/dist/css/mdb.css";

import { Toaster } from "react-hot-toast";

import { wrapper } from '../redux/store';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp);