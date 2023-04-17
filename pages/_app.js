import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

 
storyblokInit({
  accessToken: "gxeC8W3nEA8Wh5gIS3iyzgtt",
  use: [apiPlugin],
  components,

});
 


export default MyApp
