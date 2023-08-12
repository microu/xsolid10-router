import { Component, Show, Suspense, createMemo } from "solid-js";
import { useDataContext } from "../data/context";
import { A, Outlet, useParams } from "@solidjs/router";

type TProps = {};

const SolarObject: Component<TProps> = () => {
  const { findObject } = useDataContext();
  const params = useParams<{ ename: string }>();

  const fallback = () => <div>Waiting {params.ename}[...]</div>;
  const data = createMemo(() => findObject(params.ename));

  return (
    <Suspense fallback={fallback()}>
      <Show
        when={data() != undefined}
        fallback={`Unknown object:${params.ename}`}
      >
        <div>Solar system object {data()!.eName}</div>
        <div>
          <A href={`./description`}>[Description]</A>
          <A href="./data">[JSON]</A>
        </div>
        <div>
          <Outlet />
        </div>
      </Show>
    </Suspense>
  );
};

export default SolarObject;
