// implementaion with iterator

const range = (start, end, stepper) => {
  return {
    next: () => {
      if (start <= end) {
        let result = { done: false, value: start };
        start += stepper;
        return result;
      }
      return {
        done: true,
        value: undefined,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};

// test cases

// let iterator = range(1, 10, 2);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log([...range(10,50,3)]);

// for (let value of range(1, 10, 1)) {
//   console.log(value);
// }

// implementaion with generator

// function* range(start, end, stepper) {
//   while (start <= end) {
//     yield start;
//     start += stepper;
//   }
// }

// let gen = range(1, 10, 1);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// for (let value of range(1, 10, 2)) {
//   console.log(value);
// }

// console.log([...range(10,50,3)]);
