/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

function larPrime(n){

  var largestPrime = 1;

  while(n%2 == 0){
    largestPrime = 2;
    n = n/2;
  }

  p = 3;
  while(n != 1){
    while(n%p == 0){
      largestPrime = p
      n = n/p;
    }
    p += 2;
  }

  return largestPrime;
}

console.log(larPrime(600851475143))
