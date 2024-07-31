"use client";

import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { getWeatherAt, getWeatherLocations, Weather } from "@/lib/weather";
import { useRouter } from "next/navigation";

export type Props = {
  location: string;
};

export default function WeatherComponent({ location }: Props) {
  const router = useRouter();
  const locationWeather = getWeatherAt(location);

  if (!locationWeather) {
    return null;
  }

  function handleLocationChange(newLocation: string) {
    router.push(`/${newLocation}`);
  }

  return (
    <Box
      sx={{
        my: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <LocationTabs
        locationNames={getWeatherLocations()}
        selected={location}
        onChange={handleLocationChange}
      />
      <WeatherDetails weather={locationWeather} />
    </Box>
  );
}

type WeatherDetailsProps = {
  weather: Weather;
};
function WeatherDetails({ weather }: WeatherDetailsProps) {
  // const includeConditions = useBooleanFlagValue(
  //   "include-conditions-in-weather-display",
  //   false
  // );
  // FIXME
  const includeConditions = true;
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <Typography alignSelf="center" variant="h1" component="h3">
        {weather.temp}&deg;F
      </Typography>
      {includeConditions && (
        <Typography alignSelf="center" variant="h4" component="h3">
          {weather.conditions}
        </Typography>
      )}
    </Box>
  );
}

type LocationTabsProps = {
  locationNames: string[];
  selected: string;
  onChange: (v: string) => void;
};
function LocationTabs({
  locationNames,
  selected,
  onChange,
}: LocationTabsProps) {
  function handleChange(e: React.SyntheticEvent, value: any) {
    onChange(value);
  }
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs centered value={selected} onChange={handleChange}>
        {locationNames.map((locationName) => {
          return (
            <Tab label={locationName} value={locationName} key={locationName} />
          );
        })}
      </Tabs>
    </Box>
  );
}
