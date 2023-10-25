function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0) {
      return false;
    }
    for (let i = 3; i * i <= number; i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  const num = 17; 
  if (isPrime(num)) {
    console.log(num + " is a prime number.");
  } else {
    console.log(num + " is not a prime number.");
  }
  