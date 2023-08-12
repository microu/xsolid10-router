import { Component, Show, Suspense, createMemo } from "solid-js";
import { useDataContext } from "../data/context";
import { A, Outlet, useParams } from "@solidjs/router";
import SolarObjectShortcuts from "./SolarObjectShortcuts";

type TProps = {};

const SolarObject: Component<TProps> = () => {
  const { findObject } = useDataContext();
  const params = useParams<{ ename: string }>();

  const fallback = () => <div>Waiting {params.ename}[...]</div>;
  const data = createMemo(() => findObject(params.ename));

  console.log("Generate SolarObject", params.ename);

  return (
    <Suspense fallback={fallback()}>
      <Show
        when={data() != undefined}
        fallback={`Unknown object:${params.ename}`}
      >
        <SolarObjectShortcuts
          enames={["Earth", "Mars", "Moon", "Phobos", "Deimos", "Io", "Europa"]}
        />
        <div style="text-align: center; font-size: 1.5rem;">
          Solar system object {data()!.eName}
        </div>
        <div class="solar-detail-choice">
          <A href="description" activeClass="active">
            [Description]
          </A>
          <A href="data" activeClass="active">
            [JSON]
          </A>
        </div>
        <div>
          <Outlet />
        </div>
      </Show>
    </Suspense>
  );
};

export default SolarObject;
