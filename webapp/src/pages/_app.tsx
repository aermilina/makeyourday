import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Pacifico} from "next/font/google";


const pacifico = Pacifico({weight:'400',subsets:['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${pacifico.style.fontFamily};
        }
          * {
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
}

      `}</style>
      <Component  {...pageProps} />
    </>
  );
}
