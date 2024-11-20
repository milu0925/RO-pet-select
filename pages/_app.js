import "@/styles/globals.scss";
import "@/styles/style.css";
import { CheckContext } from "/hook/check-context";
import { SelectContext } from "@/hook/select-context";
import useRouter from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-RG7QEEE3SC", {
        page_path: url,
      });
    };

    // 監聽路由變更
    router.events.on("routeChangeComplete", handleRouteChange);

    // 清除事件監聽
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <SelectContext>
      <CheckContext>
        <Component {...pageProps} />
      </CheckContext>
    </SelectContext>
  );
}
