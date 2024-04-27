// 21. They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

interface item {
  name: string;
  price: number;
}
const book: item = {
  name: "Essential Typescript",
  price: 450,
};
const apple: item = {
  name: "golden apple",
  price: 200,
};
console.log(`book name :${book.name} \n book price: $${book.price}`);
console.log(`apple name: ${apple.name} \n apple price: $${apple.price}`);
