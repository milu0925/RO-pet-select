import "@/styles/globals.scss";
import { CheckContext } from "/hook/check-context";
export default function App({ Component, pageProps }) {
  return (
    <CheckContext CheckContext>
      <Component {...pageProps} />
    </CheckContext>
  );
}
