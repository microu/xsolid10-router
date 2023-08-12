import { Component, Show, Suspense, createMemo } from "solid-js";
import { useDataContext } from "../data/context";
import { useParams } from "@solidjs/router";

type TProps = {};

const SolarObjectData: Component<TProps> = () => {
  const { findObject } = useDataContext();
  const params = useParams<{ ename: string }>();
  const data = createMemo(() => findObject(params.ename));

  const fallback = () => <div>Waiting {params.ename}[...]</div>;

  return (
    <Suspense fallback={fallback()}>
      <Show when={data() != undefined}>
        <h2>Data for {data()!.eName}</h2>
        <pre>{JSON.stringify(data()!, null,2)}</pre>
      </Show>
    </Suspense>
  );
};

export default SolarObjectData;
