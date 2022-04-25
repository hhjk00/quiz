import "antd/dist/antd.css";
// import "../styles/globals.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
