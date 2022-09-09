
const numMayor = (arr) => {
  let mayor = 0;

  for(let num of arr) {
    if(mayor < num) {
      mayor = num;
    }
  }

  return mayor;
}

console.log(numMayor([5,6,4,20,7,3,8,2,9,2,1]));