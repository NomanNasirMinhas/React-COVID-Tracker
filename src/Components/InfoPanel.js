import React from "react";
import GlobalStats from "./StatsView";
import AllCountries from "./Countries";
import Visual from "./Visual";

export default function InfoPanel({ currentScreen }) {
  if (currentScreen === 0) return <GlobalStats />;
  else if (currentScreen === 1) return <AllCountries />;
  else if (currentScreen === 2) return <Visual />;
  else return <GlobalStats />;
}
