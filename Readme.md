<div align="center">
  <img src="/hook.png" height="40px" alt="React PowerHooks" />
  <span> react-powerhooks </span>
</div>

<br />

**WIP**

[Demo](https://codesandbox.io/s/j31y1l90m3)

### About

`react-powerhooks` is a set of [react custom-hooks](https://reactjs.org/docs/hooks-custom.html) equivalent to the render props components in [`react-powerplug`](https://github.com/renatorib/react-powerplug)
Heavily inspired by [`react-hangers`](https://github.com/kitze/react-hanger)

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
