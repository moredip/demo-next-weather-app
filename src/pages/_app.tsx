import { FLAG_PROVIDER } from "@/lib/featureFlags";
import { OpenFeature, OpenFeatureProvider } from "@openfeature/react-sdk";
import type { AppProps } from "next/app";

OpenFeature.setProvider('root',FLAG_PROVIDER)


export default function App({ Component, pageProps }: AppProps) {
  return (
      <OpenFeatureProvider domain="root">
        <Component {...pageProps} />;
      </OpenFeatureProvider>
  )
}
