function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

   // Merge without mutating the provided arrays to keep mergeSort pure for callers
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
       result.push(right[rightIndex]);
       rightIndex += 1;
    }
  }
return [
    ...result,
    ...left.slice(leftIndex),
    ...right.slice(rightIndex),
  ];
}

module.exports = merge;