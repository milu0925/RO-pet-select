import "@/styles/globals.scss";
import "@/styles/style.css";
import { CheckContext } from "/hook/check-context";
import { SelectContext } from "@/hook/select-context";

export default function App({ Component, pageProps }) {
  return (
    <SelectContext>
      <CheckContext>
        <Component {...pageProps} />
      </CheckContext>
    </SelectContext>
  );
}
