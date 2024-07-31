import { FLAG_PROVIDER } from "@/lib/featureFlags";
import { OpenFeature, OpenFeatureProvider } from "@openfeature/react-sdk";
import type { AppProps } from "next/app";

OpenFeature.setProvider("some-arbitrary-domain-name", FLAG_PROVIDER);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OpenFeatureProvider domain="some-arbitrary-domain-name">
      <Component {...pageProps} />;
    </OpenFeatureProvider>
  );
}
