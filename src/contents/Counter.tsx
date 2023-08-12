import { Accessor, Component, Setter, createSignal } from "solid-js";

type TProps = {
  label?: string;
  countSignal?: [Accessor<number>, Setter<number>];
};

const Counter: Component<TProps> = (props) => {
  const [count, setCount] = props.countSignal ?? createSignal(0);

  const label = () => {
    return props.label ?? "Count: ";
  };

  return (
    <button onClick={() => setCount(count() + 1)} class="counter">
      {label()}
      {count()}
    </button>
  );
};

export default Counter;
