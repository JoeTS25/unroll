const squareArray = [
    [1, 2, 3, 21, 22, 23],
    [4, 5, 6, 24, 25, 26],
    [7, 8, 9, 27, 28, 29],
    [10,11,12, 30, 32, 34]
];

const anotherArr = [
    [2, 4, 6, 10],
    [7, 8, 9, 11],
    [12, 15, 19, 16],
    [1, 3, 5, 25]
]

function unroll(square) {
    let newArr = [];
    
    while (square.length > 0) {
    //console.log(...square.shift());
    //console.log(...square.map(a => a.pop()));
    //console.log(...square.pop().reverse());
    //console.log(...square.map(a => a.shift()).reverse());

    newArr = [...newArr, square.shift()]
    newArr = [...newArr, square.map(a => a.pop())]
    newArr = [...newArr, square.pop().reverse()]
    newArr = [...newArr, square.map(a => a.shift()).reverse()]
    }
    
    return newArr.flat();
}

unroll(squareArray);
//unroll(anotherArr);

module.exports = unroll;
