import { Component, For, Suspense } from "solid-js";
import { useDataContext } from "../data/context";
import { A } from "@solidjs/router";

type TProps = {};

const SolarSystem: Component<TProps> = () => {
  const { solarSystemData } = useDataContext();

  const fallback = () => <div>Solar system data [...]</div>;

  return (
    <Suspense fallback={fallback()}>
      <ul class="solar-objects">
        <For each={solarSystemData()}>
          {(obj: any) => (
            <li>
              <A href={`/solar-object/${obj.eName}`}>{obj.eName}</A>
            </li>
          )}
        </For>
      </ul>
    </Suspense>
  );
};

export default SolarSystem;
