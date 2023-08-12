import { Component, Show, Suspense, createMemo } from "solid-js";
import { useDataContext } from "../data/context";
import { useParams } from "@solidjs/router";

type TProps = {};

const SolarObject: Component<TProps> = () => {
  const { solarSystemData } = useDataContext();
  const params = useParams<{ ename: string }>();

  const objectData = createMemo(() => {
    const data = solarSystemData();
    const index =
      data == undefined
        ? -1
        : data.findIndex((obj) => (obj.eName = params.ename));
    if (index >= 0) {
      return data![index];
    } else {
      return undefined;
    }
  });

  const fallback = () => <div>Waiting {params.ename}[...]</div>;

  return (
    <Suspense fallback={fallback()}>
      <Show when={objectData() != undefined} fallback={`Unknown object:${params.ename}`}>
        <div>Solar system object {objectData()!.eName}</div>
      </Show>
    </Suspense>
  );
};

export default SolarObject;
