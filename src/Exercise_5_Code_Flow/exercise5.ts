// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 5 – Code flow analysis
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Understand how TypeScript performs code flow analysis
// • Create and apply union and intersection types
// • Use basic type guards (narrowing types w/ typeof, instanceof, etc.)

export default () => {

  // ======== Exercise 5.1 ========
  // Instructions:
  // • Restrict type of `value` to `string OR number`
  // • Fix any resulting errors.

  function doStuff(value: any): void {
    if (typeof value === 'string') {
      console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
      console.log(value.toPrecision(5));
    }

    value; // hover over `value` here
  }
  
  doStuff(2);
  doStuff(22);
  doStuff(222);
  doStuff('hello');
  doStuff(true);
  doStuff({});

  console.log('[Exercise 5.1]');

  // ======== Exercise 5.2 ========
  // Instructions:
  // • Use a type guard to fill out the body of the `padLeft` function.

  function padLeft(value: string, padding: number | string): string {
    // if padding is a number, return `${Array(padding + 1).join(' ')}${value}`
    // if padding is a string, return padding + value
  }

  console.log('[Exercise 5.2]', `
    ${padLeft('🐕', 0)}
    ${padLeft('🐕', '🐩')}
    ${padLeft('🐕', '🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩')}
    ${padLeft('🐕', '🐩🐩🐩🐩')}
  `);

  // ======== Exercise 5.3 ========
  // Instructions:
  // • Add type annotations (`any` excluded)
  // • Inspect inferred type of `element` in different code branches

  const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

  function flatten(array) {
    const flattened = [];

    for (const element of array) {
      if (Array.isArray(element)) {
        element; // any[]
        flattened.push(...element);
      } else {
        element; // any
        flattened.push(element);
      }
    }

    return flattened;
  }

  const flattenedNumbers = flatten(numbers);

  console.log('[Exercise 5.3]', flattenedNumbers);

  // ======== Exercise 5.4 ========
  // 
  // Instructions:
  // • Birds and Fish both lay eggs. Only Birds fly. Only Fish swim. Define
  //   two new types: `BirdLike` and `FishLike` based on these traits.
  // • Create a type alias for `Bird OR Fish` called `Animal`
  // • Use an `instanceof` type guard in `interrogateAnimal` to allow the fishes 
  //   to swim the and birds to fly.
  // • Add any missing type annotations, being as explicit as possible.

  interface EggLayer {
    layEggs(): void;
  }

  interface Flyer {
    fly(height: number): void;
  }

  interface Swimmer {
    swim(depth: number): void;
  }
  // -----------------------
  // add type alias(es) here
  // type BirdLike = ?

  // -----------------------

  class Bird implements BirdLike {
    constructor(public species: string) {}

    layEggs(): void {
      console.log('Laying bird eggs.');
    }

    fly(height: number): void {
      console.log(`Flying to a height of ${height} meters.`);
    }
  };

  class Fish implements FishLike {
    constructor(public species: string) {}

    layEggs(): void {
      console.log('Laying fish eggs.');
    }

    swim(depth: number): void {
      console.log(`Swimming to depth of ${depth} meters.`);
    }
  }

  function getRandomAnimal() {
    const animals = [
      new Bird('puffin'),
      new Bird('kittiwake'),
      new Fish('sea robin'),
      new Fish('leafy seadragon'),
    ];

    return animals[Math.floor(Math.random() * animals.length)];
  }

  function interrogateAnimal(animal = getRandomAnimal()) {
    animal.swim(10) // call only if it is a fish
    animal.fly(10); // call only if it is a bird

    return animal.species;
  }

  console.log('[Exercise 5.4]', `We've got a ${interrogateAnimal()} on our hands!`);
}
