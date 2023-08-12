import { A } from "@solidjs/router";
import { Component, For } from "solid-js";

type TProps = {
  items: { label: string; href: string }[];
};

const NavBar: Component<TProps> = (props) => {
  return (
    <nav class="navbar">
        <For each={props.items}>
          {(item) => (
              <A href={item.href} activeClass="active" end={true}>
                {item.label}
              </A>
          )}
        </For>
    </nav>
  );
};
export default NavBar;
