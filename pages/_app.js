import "../styles/app.scss";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
     <NextNProgress
      color="rgb(148, 18, 18);"
      startPosition={0.3}
      stopDelayMs={200}
      height={8}
      showOnShallow={true}
    />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
