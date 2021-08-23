import { Provider } from "react-redux";
import { store } from "../src/app/store";
// import { store } from "../app/store";
import "../src/styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
