import { RouteDefinition } from "@solidjs/router";
import { createSignal } from "solid-js";
import Home from "./contents/Home.js";
import All from "./contents/All.js";
import Counter from "./contents/Counter.js";
import SolarSystem from "./contents/SolarSystem.jsx";
import SolarObject from "./contents/SolarObject.jsx";
import SolarObjectDescription from "./contents/SolarObjectDescription.jsx";
import SolarObjectData from "./contents/SolarObjectData.jsx";

const [countA, setCountA] = createSignal(0);
const [countB, setCountB] = createSignal(0);

const routes: RouteDefinition[] = [
  {
    path: "/countera",
    component: () => Counter({ label: "A:", countSignal: [countA, setCountA] }),
  },
  {
    path: "/counterb",
    component: () => Counter({ label: "B:", countSignal: [countB, setCountB] }),
  },
  {
    path: "/counterc",
    component: () => Counter({ label: "C:" }),
  },
  {
    path: "/solar-system",
    component: SolarSystem,
  },
  {
    path: "/solar-object/:ename",
    component: SolarObject,
    children: [
      { path: "/", component: () => "....................." },
      { path: "/description", component: SolarObjectDescription },
      { path: "/data", component: SolarObjectData },
    ],
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/*all",
    component: All,
  },
];
export default routes;
