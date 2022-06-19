// Задание 1
function getArrayParams(arr) {
  let min, max, avg;
  let sum = 0;
  min = Infinity;
  max = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    };
    if (max <= arr[i]) {
      max = arr[i];
    };
    sum = sum + arr[i];

  };

  sum = sum / arr.length;
  avg = sum;
  avg = parseFloat(sum.toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let ax = 0
  // Ваш кода
  // for ...
  for (let j = 0; j < arrOfArr.length; j++) {
    ax = func(arrOfArr[j]);
    if (ax > max) {
      max = ax;
    };
  };
  return max;
}

/// Задание 3
function worker2(arr) {
  //Ваш код
  console.log(arr);
  let min = Infinity;
  let max = -Infinity;

  for (let j = 0; j < arr.length; j++) {
    if (min >= arr[j]) {
      min = arr[j];
    }
    if (max <= arr[j]) {
      max = arr[j];
    }
  };

  let a = 0;
  if (Math.abs(max) < Math.abs(min)) {
    a = Math.abs(min) - Math.abs(max);
  }
  else {
    a = Math.abs(max - min);
  }
  return Math.abs(a);
};