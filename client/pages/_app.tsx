import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initFirebase } from "../utils/firebaseUtils";
import { Provider } from "react-redux";
import store from "../redux/store";

initFirebase();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
