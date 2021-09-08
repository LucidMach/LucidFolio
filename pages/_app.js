import "../styles/globals.css";
import LayOut from "../components/LayOut";

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
  );
}

export default MyApp;
