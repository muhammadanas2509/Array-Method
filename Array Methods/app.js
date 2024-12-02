const arrays = [
    42,
    true,
    "Hello, World!",
    {
        name: "John",
        age: 25,
        isStudent: false
    },
    false,
    3.14,
    "JavaScript is fun!",
]

// Q1: Convert all elements to their string representation using map Method?

const arr = arrays.map((e, i) => {
    return e.toString()
})

console.log(arr)


//  Q2: Filter only number elements using filter Method?

const numFilter = arrays.filter((e, i) => {
    return typeof e === "number";
});

console.log(numFilter);


//  Q3: Log each element's type to the console (does not return anything) using forEach Method?

arrays.forEach((element) => {
    console.log(element);
});


// Q4: Sum up only the numbers in the array reduce Method?


const sum = arrays.reduce((e, i) => {
    return typeof i === "number" ? e + i : e;
}, 0);
console.log(sum); 


// Q5: Find the first boolean value in an array using Find Method?
 
const findBoolean = arrays.find((e,i) =>{
    return typeof e === "boolean"
})
console.log(findBoolean)


//Q6: Find the index of the first object in an array using FindIndex Method?


const FindInd = arrays.findIndex((e,i) =>{
    return typeof e === "object"
})

console.log(FindInd);



// Q7: Check if the array contains any numbers in an array using some method?


let checkNum = arrays.some((e, i) => {
  return typeof e === "number" ;  
});

console.log(checkNum);


// Q8: Check if all elements are of type 'string' in an array using every method?



let checkStr = arrayss.every((e, i) => {
    return typeof e === "string" ;  
  });
  
  console.log(checkStr);
  