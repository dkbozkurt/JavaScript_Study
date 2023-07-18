// Smallest Common Multiple
/*
Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between these
parameters.

The range will be an array of two numbers that will not necessarily be in
numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
that is also evenly divisible by all numbers between 1 and 3. The answer here
would be 6.
*/

function smallestCommons(arr) {
    const primeFactors = {};
    const [min, max] = arr.sort((a, b) => a - b);
    for (let i = min; i <= max; i++) {
      // Factorize number in range
        const currentFactors = getPrimeFactors(i);
        for (let prime in currentFactors) {
        // Add factor to set or update number of occurrences
            if (!primeFactors[prime] || currentFactors[prime] > primeFactors[prime]) {
            primeFactors[prime] = currentFactors[prime]
            }
        }
    }
    // Build SCM from factorization
    let multiple = 1;
    for (let prime in primeFactors) {
      multiple *= prime ** primeFactors[prime];
    }
    return multiple;
}

function getPrimeFactors(num) {
    const factors = {};
    for (let i = 2; i <= num; i++) {
      // Count occurances of factor
      // Note that composite values will not divide num
        while ((num % i) === 0) {
        factors[i] = (factors[i]) ? factors[i] + 1 : 1;
        num /= i;
        }
    }
    return factors;
}

smallestCommons([1,5]);

// Solution 2 

/*
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);
*/