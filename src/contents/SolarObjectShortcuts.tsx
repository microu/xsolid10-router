import { Component, For } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

type TProps = {
  enames: string[];
};

const SOLAR_OBJ_LOCATION_RE = /^\/solar-object\/([^\/]+)\/(data|description)/;

const SolarObjectShortcuts: Component<TProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  function navigateToObject(ename: string) {
    console.log("LOCATION:", location.pathname);

    const m = location.pathname.match(SOLAR_OBJ_LOCATION_RE);
    if (m) {
      console.log("M:", m);
      navigate(`/solar-object/${ename}/${m[2]}`);
    } else {
      navigate(`/solar-object/${ename}/`);
    }
  }

  return (
    <ul class="solar-shortcuts">
      <For each={props.enames}>
        {(ename: string) => (
          <li onClick={() => navigateToObject(ename)}>{ename}</li>
        )}
      </For>
    </ul>
  );
};

export default SolarObjectShortcuts;
