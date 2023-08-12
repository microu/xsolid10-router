import { useParams } from "@solidjs/router";
import { Component } from "solid-js";

type TProps = {};

const All: Component<TProps> = (_props) => {
  const params = useParams()

  return <h1>All content: {params.all}</h1>;
};

export default All;
