// #1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Create a function that prints/logs all the even numbers from 4 to 22.
// Have it also return the sum of all the numbers that were printed.
function printEven4to22() {
  // Enter code below
  let sum = 0;
  for (let i = 4; i <= 22; i += 2) {
    console.log(i);
    sum += i;
  }
  return sum;
}

// Test Cases (2/2)
printEven4to22(); //to log 4 6 8 10 12 14 16 18 20 22
printEven4to22(); //to return 130

// #2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Add odd integers from -25,000 to 30,000 and have the function return its final sum. Is there a short cut?
// Before you work on this, please watch the following video:
function addOddInts() {
  // Enter code below
  let sum = 0;
  for (let i = -25000; i <= 30000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

// Test Cases (1/1)
addOddInts(); //to return 68750000

// 3 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Write a function that will swap the first and last values in any given array. The default minimum length of the array is 2.
// For example, swapFirstLast([1,3,5]) should return [5, 3, 1]. swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1].
function swapFirstLast(arr) {
  // Enter code below
  if (arr.length < 2) return arr;
  const temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}
// Test Cases (3/3)
swapFirstLast([1, 3, 5]); // to return [5,3,1]
swapFirstLast([1, 3, 5, 7, 9]); // to return [9,3,5,7,1]
swapFirstLast([1, 3]); // to return [3,1]
