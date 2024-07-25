import "../public/assets/scss/app.scss";
import Head from "next/head";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import TapToTop from "../layout/TapToTop";
import Customizer from "../layout/Customizer";
import { store } from "../redux-toolkit/store";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";
import StoreOldData from "../utils/StoreOldData";
import "react-toastify/dist/ReactToastify.css";
import { ConfigDB } from "../config/themeCustomizerConfig";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      document.documentElement.style.setProperty("--theme-default", ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : "#ff5c41");
      document.documentElement.style.setProperty("--theme-default2", ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : "#ff8c41");
    });
    document.documentElement.style.setProperty("--theme-default", ConfigDB.PrimaryColor ? ConfigDB.PrimaryColor : "#ff5c41");
    document.documentElement.style.setProperty("--theme-default2", ConfigDB.SecondaryColor ? ConfigDB.SecondaryColor : "#ff8c41");
  }, [router.events]);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="E-Home" />
        <meta name="keywords" content="E-Home" />
        <meta name="author" content="E-Home" />
        <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <title>E-Home</title>
      </Head>
      <Provider store={store}>
        <>
          <Component {...pageProps} />
          {/* <Customizer /> */}
          <TapToTop />
          <StoreOldData />
          <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme={"light"} />
        </>
      </Provider>
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);
