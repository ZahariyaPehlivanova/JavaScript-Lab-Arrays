function solve(currArr) {
    let arr = [];
    for(let i = 0; i < currArr.length; i+= 2){
        arr.push(currArr[i]);
    }
    console.log(arr.join(' '));
}
solve(['20', '30', '40']);