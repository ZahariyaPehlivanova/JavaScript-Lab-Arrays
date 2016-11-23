function solve(currArr) {
    let arr = [];
    for(let i = 0; i < currArr.length; i++){
        let el = Number(currArr[i]);

        if(el < 0) {
            arr.unshift(currArr[i]);
        }
        else
        {
            arr.push(currArr[i]);
        }
    }
    console.log(arr.join(' '));
}
solve(['7', '-2', '8', '9']);