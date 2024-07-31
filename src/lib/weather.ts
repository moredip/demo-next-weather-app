export type Weather = {
  temp: number;
  conditions: string;
};

const FAKE_WEATHER: Record<string, Weather> = {
  "San Francisco": {
    temp: 62,
    conditions: "foggy",
  },
  Boston: {
    temp: 33,
    conditions: "clear",
  },
  Seattle: {
    temp: 52,
    conditions: "drizzle",
  },
};

export function getWeatherAt(location: string): Weather {
  return FAKE_WEATHER[location];
}

export function getWeatherLocations(): string[] {
  return Object.keys(FAKE_WEATHER);
}

export function defaultLocation(): string {
  return getWeatherLocations()[0];
}
