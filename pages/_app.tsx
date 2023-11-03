import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { HomeContextProvider } from "@/src/context/home";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </HomeContextProvider>
  );
}
