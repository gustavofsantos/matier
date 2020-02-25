## matier

Run functions on matched expressions.

```javascript
class Just {
  constructor(value) { this.value = value; }
}
class Nothing {}

const maybe =
  (thing) =>
    thing ? new Just(thing) : new Nothing();

const res = match(
  maybe(10), [
    (x) => x instanceof Just,
    (jx) => {
      console.log(`is Just ${jx.value}`);
      return jx.value;
    },
  ], [
    (x) => x instanceof Nothing,
    (n) => console.log('is nothing'),
  ]
)

console.log(res); // 10
```

#### Getting Started

Install with npm:

```
npm install matier
```

#### 