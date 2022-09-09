const aplanar = (arr) => {
  let newArr = [];

  for(let item of arr) {
    newArr = newArr.concat(item);
  }

  return newArr;
}

console.log(aplanar([[1,4], [[1]], [8, []]]));