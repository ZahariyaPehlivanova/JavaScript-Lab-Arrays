function solve(arr) {

    let matrix = arr.map(
        row => row.split(' '));

    let n = 0;
    for(let row = 0;row < matrix.length - 1;row++){
        for(let col = 0;col < matrix[row].length;col++){

            let curr = matrix[row][col];

            if (curr == matrix[row + 1][col] || curr == matrix[row][col + 1])
                n++;
            }
    }
    for(let row = matrix.length - 1;row < matrix.length;row++){
        for(let col = 0;col < matrix[row].length;col++){

            let curr = matrix[row][col];

            if (curr == matrix[row][col + 1])
                n++;
        }
    }
    console.log(n);
}
solve(['2 2 5 7 4',
    '4 0 5 3 4',
    '2 5 5 4 2']
);