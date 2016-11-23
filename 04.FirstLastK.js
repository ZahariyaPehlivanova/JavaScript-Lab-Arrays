function solve(currArr) {
    let k = Number(currArr.shift());

    console.log(currArr.slice(0, k).join(' '));
    
    console.log(currArr.slice(currArr.length-k,currArr.length).join(' '));

}
solve(['3',
    '6', '7', '8', '9']
);