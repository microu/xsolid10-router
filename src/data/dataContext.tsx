import { Resource, createResource } from "solid-js";

export type TSolarSystemObject = {
  eName: string;
  isPlanet: boolean;
  orbit_type: string;
  orbits: string;
};

export type TDataContext = {
  solarSystemData: Resource<TSolarSystemObject[]>;
  findObject(eName: string): TSolarSystemObject | undefined;
};

async function fetchSolarSystemData() {
  const resp = await fetch("/data/solar_system_major_bodies.json");
  const jsonData = await resp.json();
  await new Promise((r) => setTimeout(r, 2000));
  console.log("DATA:", jsonData);
  return jsonData;
}

export function buildDataContext(): TDataContext {
  const [solarSystemData] = createResource(fetchSolarSystemData);

  const objectData = (eName: string) => {
    const data = solarSystemData();
    const index =
      data == undefined
        ? -1
        : data.findIndex((obj: TSolarSystemObject) => obj.eName == eName);
    if (index >= 0) {
      return data![index];
    } else {
      return undefined;
    }
  };

  return { solarSystemData, findObject: objectData };
}
