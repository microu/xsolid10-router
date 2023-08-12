import { Resource, createResource } from "solid-js";

export type TSolarSystemObject = {
  eName: string;
  isPlanet: boolean;
  orbit_type: string;
  orbits: string;
};

export type TDataContext = {
  solarSystemData: Resource<TSolarSystemObject[]>;
};

async function fetchSolarSystemData() {
  const resp = await fetch("/data/solar_system_major_bodies.json");
  const jsonData = await resp.json();
  await new Promise((r) => setTimeout(r, 2000));
  console.log("DATA:", jsonData);
  return jsonData;
}

export function buildDataContext() {
  const [solarSystemData] = createResource(fetchSolarSystemData);

  return { solarSystemData };
}
