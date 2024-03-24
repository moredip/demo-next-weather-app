import { EvaluationContext, InMemoryProvider } from "@openfeature/react-sdk";

const featureFlagConfig = {
  'include-conditions-in-weather-display': {
    disabled: false,
    variants: {
      on: true,
      off: false,
    },
    defaultVariant: "on"
  },
};

export const FLAG_PROVIDER = new InMemoryProvider(featureFlagConfig);
