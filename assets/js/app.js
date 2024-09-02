//1 Given an array const arr [5, 12, 8, 130, 44);, expected output return the first element that is greater than 10

const arr = [5, 12, 8, 130, 44];
const findfirstelement = arr.find((ele) => ele > 10);

console.log(findfirstelement);

//2 use a higher-order function to find the user object with the name "Jane".
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];
// Expected Output : { id: 2, name: "Jane" }

const findjane = users.find((ele) => ele.name.toLocaleLowerCase().includes('jane'));
console.log(findjane);

const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// 3 expected output to locate the sub-array that contains the number 4?

const subarr = nestedArr.find((ele) => ele.includes(4));
console.log(subarr);

// 4 to create a new array that contains the names of products with prices that are multiples of 100, but only those from the "Clothing" or "Accessories" categories.
const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Phone", price: 800, category: "Electronics" },
  { id: 3, name: "Shirt", price: 40, category: "Clothing" },
  { id: 4, name: "Shoes", price: 100, category: "Clothing" },
  { id: 5, name: "Watch", price: 200, category: "Accessories" },
];

//  expected output ['Shoes', 'Watch']

const findproduct = products.filter((ele) => {
  return (
    (ele.category.toLocaleLowerCase().includes('clothing')|| ele.category.toLocaleLowerCase().includes('accessories')) &&
    ele.price % 100 === 0
  );
});
console.log(findproduct);
const findproductname = findproduct.map((ele) => ele.name);
console.log(findproductname);

// 5  Given a products array, to transform the array into a new array where each product is represented as an object with id, name, and a new priceWithTax property (assuming a tax rate of 10%).

// // expected output [ { id: 1, name: 'Laptop', priceWithTax: 1320 },
//  { id: 2, name: 'Phone', priceWithTax: 880 },
//  { id: 3, name: 'Shirt', priceWithTax: 44 },
//  { id: 4, name: 'Shoes', priceWithTax: 110 },
//   { id: 5, name: 'Watch', priceWithTax: 220 }
// ]

const updatedpro = products.map((ele) => {
  const tax = (ele.price * (10/100))
  return {
    id: ele.id,
    name: ele.name,
    priceWithTax: ele.price + tax,
  };
});
console.log(updatedpro);



// 6 create a new array containing only products that are in the "Clothing" or "Accessories" categories and cost less than $150.
// expected output
// [
//  { id: 3, name: 'Shirt', price: 40, category: 'Clothing' },
//  { id: 4, name: 'Shoes', price: 100, category: 'Clothing' }
//  ]

const findprocostless150 = products.filter((ele) => {
  return (
    (ele.category.toLocaleLowerCase().includes('clothing') || ele.category.toLocaleLowerCase().includes('accessories')) &&
    ele.price < 150
  );
});
console.log(findprocostless150);

// 7 products priced above $100, then create an array of prices, and finally find the total price of these filtered products.
// expected output 2200

const result1 = products.filter((ele) => {
  return ele.price > 100;
});
console.log(result1);
const result2 = result1.map((ele) => {
  return ele.price;
});
console.log(result2);
const result3 = result2.reduce((acc, cv) => {
  return acc + cv;
}, 0);
console.log(result3);

// 8 to create a new array that contains only the id and name of each product, omitting other properties.
// expected output [ { id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }, { id: 3, name: 'Shirt' }, { id: 4, name: 'Shoes' }, { id: 5, name: 'Watch' } ]

const newarr = products.map(({ id, name }) => ({ id, name }));
console.log(newarr);

// 9 First, show products with prices less than $1000. Then create an array of their names. Finally, and create an object where the product names are keys and their prices are values.

const priceless1000 = products.filter((ele) => ele.price < 1000);
console.log(priceless1000);

const productwithname = priceless1000.map((ele) => ele.name);
console.log(productwithname);

const productobj = priceless1000.reduce((acc, cv) => {
  acc[cv.name] = cv.price;
  return acc;
}, {});
console.log(productobj);

// 10 to create a new array of strings describing each product in the format: "Product: [name], Price: $[price]"
// expected output
// [ "Product: Laptop, Price: $1200",
//  "Product: Phone, Price: $800",
//   "Product: Shirt, Price: $40",
//    "Product: Shoes, Price: $100",
//    "Product: Watch, Price: $200"]
const prodis = products.map(
  (ele) => `Producet: ${ele.name},Price:${ele.price}`
);
console.log(prodis);

// 11 to remove products with a price greater than $300. Then create a new array where each product's name is suffixed with " - ON SALE"
// expected output [ "Shirt - ON SALE", "Shoes - ON SALE", "Watch - ON SALE" ]

const pricegreaterthan300 = products
  .filter((ele) => ele.price <= 300)
  .map((ele) => `${ele.name}- ON SALE`);

console.log(pricegreaterthan300);

// 12 to create a new array of products that belong to the "Electronics" category and cost between $500 and $1000.
// expected output [ { id: 2, name: 'Phone', price: 800, category: 'Electronics' } ]

const newpro = products.filter(
  (ele) =>
    ele.category.toLocaleLowerCase().includes('electronics') && ele.price >= 500 && ele.price <= 1000
);
console.log(newpro);

// 13 What is the sum of all the elements in the
// expected output 15

array = [1, 2, 3, 4, 5];

const sumofarr = array.reduce((acc, cv) => acc + cv, 0);
console.log(sumofarr);

// 14 Use reduce to convert the array [1, 2, 3, 4, 5] ;
//  into an object where the keys are the elements and the values are their squares
// expected output {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
array[(1, 2, 3, 4, 5)];

const squareofarr = array.reduce((acc, cv) => {
  acc[cv] = cv ** 2;
  return acc;
}, {});
console.log(squareofarr);

// 15 How can you or to calculate the sum of an array of objects,
// expected output 60

const array4 = [{ value: 10 }, { value: 20 }, { value: 30 }];
const sumofobj = array4.reduce((acc, cv) => acc + cv.value, 0);
console.log(sumofobj);

// 17 Given an array of , how can you or to make flatten it into a single array?
// expected output [1, 2, 3, 4, 5, 6]
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatarr=arrays.reduce((acc,cv)=>acc.concat(cv),[])
console.log(flatarr)


//  unsolved problems

// 16  How can you use reduce to reverse the
// expected output [5, 4, 3, 2, 1]
array = [1, 2, 3, 4, 5];



// 18 How would you use reduce to remove duplicate elements from the
// expected output [1, 2, 3, 4, 5]
const array5=[(1, 2, 3, 2, 4, 3, 5)];

// const removeduplicate=array5.reduce((acc,cv)=>{
  
// },[])
// console.log(removeduplicate)


