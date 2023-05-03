import Footer from "@/shared/components/footer";
import Header from "@/shared/components/header";
import "@/styles/globals.css";
import { RouteGuard } from "@/utils/RouteGuard";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RouteGuard>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </RouteGuard>
  );
}
