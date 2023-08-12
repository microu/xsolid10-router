import { Component, Show, Suspense, createMemo } from "solid-js";
import { useDataContext } from "../data/context";
import { useParams } from "@solidjs/router";

type TProps = {};

const SolarObjectDescription: Component<TProps> = () => {
  const { findObject } = useDataContext();
  const params = useParams<{ ename: string }>();

  const data = createMemo(() => findObject(params.ename));

  const fallback = () => <div>Waiting {params.ename}[...]</div>;

  return (
    <Suspense fallback={fallback()}>
      <Show when={data() != undefined}>
        <h2>Description of {data()!.eName}.</h2>
        <p>
          {data()!.eName} is {data()!.isPlanet ? "" : "not"} a planet.
        </p>

        <div>[Info] [Json]</div>
      </Show>
    </Suspense>
  );
};

export default SolarObjectDescription;
