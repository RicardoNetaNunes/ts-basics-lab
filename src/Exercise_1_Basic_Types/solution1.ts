// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Solution 1 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Annotate primitive types, arrays, and 'any' types
// • Identify when type checking happens
// • Afterwards we will analyze transpiler output

export default () => {
  // ======== Solution 1.1 ========
  // Instructions:
  // • Fix errors

  let pi = 3.14159;
  let tau = pi * 2;

  console.log('[Solution 1.1]', `${tau} is ${pi} times two.`);

  // ======== Solution 1.2 ========
  // Instructions:
  // • Inspect type of `pie`
  // • Add an explicit type annotation to `pie`
  // • Try assigning invalid types, for fun

  let pie: string;
  pie = 'blueberry';

  console.log('[Solution 1.2]', `I like to eat ${pie}-flavored pie.`);

  // ======== Solution 1.3 ========
  // Instructions:
  // • Inspect the error, then fix it.

  let isMark: boolean = true;

  console.log('[Solution 1.3]', `${isMark ? 'Oh, hi Mark' : 'Who are you?'}`);

  // ======== Solution 1.4 ========
  // Instructions:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  const integer: number = 6;
  const float: number = 6.66;
  const hex: number = 0xf00d;
  const binary: number = 0b1010011010;
  const octal: number = 0o744;
  const negZero: number = -0;
  const actuallyNumber: number = NaN;
  const largestNumber: number = Number.MAX_VALUE;
  const mostBiglyNumber: number = Infinity;

  const members: number[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
  ];

  members[0] = 12345;

  console.log('[Solution 1.4]', members);

  // ======== Solution 1.5 ========
  // Instructions:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  const sequence: number[] = Array.from(Array(10).keys());
  const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
  const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
  const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

  console.log('Solution 1.5', allMyArrays);

  // ======== Solution 1.6 ========
  // Goal:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  // We want to represent an inventoryItem as a structure where
  // the first entry is the item name and the second is the quantity

  const inventoryItem: [string, number] = ['fidget wibbit', 11];

  // later we destructure it
  const [name, qty] = inventoryItem;

  const msg = addInventory(name, qty);

  console.log('[Solution 1.6]', msg);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }
}
