import React from "react";
import useMap from "../src/map";

const updater = () => {
  return "42";
};

export default () => {
  const {
    set: setKey,
    get: getKey,
    has,
    delete: deleteKey,
    clear,
    reset,
    values
  } = useMap({ name: "PK", age: "30", occupation: "Reactor" });
  const { name, age, occupation } = values;
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{occupation}</div>
      <button
        onClick={() => {
          setKey("age", updater);
        }}
      >
        Change age to 42
      </button>
      <button
        onClick={() => {
          alert(`hasName = ${has("name")}`);
        }}
      >
        {" "}
        Has name?
      </button>
      <button
        onClick={() => {
          alert(`hasSurName = ${has("surname")}`);
        }}
      >
        {" "}
        Has surname?
      </button>
      <button
        onClick={() => {
          alert(`name = ${getKey("name")}`);
        }}
      >
        Get Name
      </button>
      <button
        onClick={() => {
          clear();
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};
