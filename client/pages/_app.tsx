import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initFirebase } from "../utils/firebaseUtils";
import { Provider } from "react-redux";
import store from "../redux/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavigationBar from "../components/NavigationBar";
import { Stack } from "@mui/material";
import CreateAccount from "../components/onboarding/CreateAccount";
import OnboardingMain from "../components/onboarding/OnboardingMain";

initFirebase();

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Stack>
        <NavigationBar />
        <Component {...pageProps} />
      </Stack>

    </Provider>
  );
}

export default MyApp;
