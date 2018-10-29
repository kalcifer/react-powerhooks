<div align="center">
  <img src="/hook.png" height="40px" alt="React PowerHooks" />
  <span fontSize='20px'> react-powerhooks </span>
</div>

<br />

> ⚠️ Warning: hooks are not part of a stable React release yet, so use this library only for experiments

[Demo](https://codesandbox.io/s/j31y1l90m3)

### Install

```bash
yarn add react-powerhooks
```

### About

`react-powerhooks` is a set of [react custom-hooks](https://reactjs.org/docs/hooks-custom.html) equivalent to the render props components in [`react-powerplug`](https://github.com/renatorib/react-powerplug)
Heavily inspired by [`react-hangers`](https://github.com/kitze/react-hanger)
The logo is from [wikimedia commons](https://commons.wikimedia.org/wiki/File:OCR_hook.svg)

### API

#### useToggle

This is a hook that lets you toggle between boolean values.
It needs an `initialValue` to work with.

_Usage_

```jsx
const initialValue = true;
const [currentValue, toggleAway] = useToggle(initialValue);
```

#### useActive

This hook lets you know when your mouse pointer is active on a particular element.
It needs a `ref` of the element in question to work with. It can also take an `onChange` callback which it calls everytime the active state changes. The `onChange` function recieves the current active state of the element as a boolean value.

_Usage_

```jsx
const ref = useRef(null); // Use the ref in the element concerned.
// More about useRef here https://reactjs.org/docs/hooks-reference.html#useref
const activeValue = useActive({ refEl: ref });
```

#### useInterval

This hook starts an interval timer that can be stopped/resumed any time.
It takes in `startImmediate` which decides whether the interval is on by default.
It also takes a `time` which is the interval duration.

It provides a `start` and `stop` method which allow us to control the state of the interval.

_Usage_

```jsx
const [time, setTime] = useState(null);
const { start, stop } = useInterval({
  duration: 1000,
  startImmediate: false,
  callback: () => {
    setTime(new Date().toLocaleTimeString());
  }
});

return (
  <Fragment>
    <div>The time is now {time}</div>
    <button onClick={() => stop()}>Stop interval</button>
    <button onClick={() => start()}>Start interval</button>
  </Fragment>
);
```
