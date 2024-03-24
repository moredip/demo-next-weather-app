import { EvaluationContext, InMemoryProvider } from "@openfeature/react-sdk";

const featureFlagConfig = {
  'include-conditions-in-weather-display': {
    disabled: false,
    variants: {
      on: true,
      off: false,
    },
    defaultVariant: "on",
    contextEvaluator: (context: EvaluationContext) => {
      // we haven't rolled out this feature to the San Francisco market yet
      if (context.location === 'San Francisco') {
        return 'off'
      }
      return 'on'
    }
  },
};

export const FLAG_PROVIDER = new InMemoryProvider(featureFlagConfig);
