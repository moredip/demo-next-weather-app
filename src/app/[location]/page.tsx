"use client";

import WeatherComponent from "../../components/Weather";

export default function Page({ params }: { params: { location: string } }) {
  // seems surprising that I need to do this by hand!
  const location = decodeURIComponent(params.location);
  return <WeatherComponent location={location} />;
}
