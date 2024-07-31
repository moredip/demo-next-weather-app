import { unstable_flag as flag } from "@vercel/flags/next";

export const includeWeatherConditions = flag({
  key: "include-conditions-in-weather-display",
  decide: () => false,
});
