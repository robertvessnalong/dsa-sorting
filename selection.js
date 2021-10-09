function selectionSort(arr) {
  const solver = (arr, idxOne, idxTwo) => {
    return ([arr[idxOne], arr[idxTwo]] = [arr[idxTwo], arr[idxOne]]);
  };
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[low] > arr[j]) {
        low = j;
      }
    }
    if (i !== low) {
      solver(arr, i, low);
    }
  }
  return arr;
}

module.exports = selectionSort;
