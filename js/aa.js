
var  cubeArray = 
[
    [
        [0],
        [0],
        [0],
        [0],
        [0]
    ],
    [
        [0],
        [0],
        [0],
        [0],
        [0]
    ],
    [
        [0],
        [0],
        [0],
        [0],
        [0]
    ],
    [
        [0],
        [0],
        [0],
        [0],
        [0]
    ],
    [
        [0],
        [0],
        [0],
        [0],
        [0]
    ]
];

//Go through the cube, and decide the starting positions of the cubes inside of it, as well as how many will be displayed
for ( let i = 0; i < 5; i ++ ){
    for( let x = 0; x < 5; x ++){
        for( let y = 0; y < 5; y ++ ){
            cubeArray[i][x][y] = Math.round(Math.random(1));
        }
    }
}
    
console.log(cubeArray);