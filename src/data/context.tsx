import { ParentProps, createContext, useContext } from "solid-js";
import { TDataContext, buildDataContext } from "./dataContext";

const dataContext = createContext<TDataContext>();

export function DataContextProvider(props: ParentProps) {
  console.log("Provide notes context");
  const contextValue = buildDataContext();
  return (
    <dataContext.Provider value={contextValue}>
      {props.children}
    </dataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(dataContext)!;
}
