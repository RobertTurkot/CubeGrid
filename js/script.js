import * as THREE from 'https://cdn.skypack.dev/three@0.134.0'
import { OrbitControls } from '../examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xbfe3dd );
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
camera.position.set( 2, 2, 10 );


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

var  cubePosition = [[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]]];
var  cubeArray = [[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]],[[0],[0],[0],[0],[0]]];

const group = new THREE.Group();

//Go through the cube, and decide the starting  ons of the cubes inside of it, as well as how many will be displayed.
//If the position that is currently being iterated is a position of a cube, create a cube in the cubeArray array. 
for ( let z = 0; z < 5; z ++ ){
    for( let x = 0; x < 5; x ++){
        for( let y = 0; y < 5; y ++ ){
            if (Math.random(1) + 0.5 >= 1){
                const material = new THREE.MeshBasicMaterial( { color: Math.floor(Math.random()*16777215)} );
                cubeArray[z][x][y] = new THREE.Mesh( geometry, material );
                cubePosition[z][x][y] = 1;

                cubeArray[z][x][y].position.z = z-2;
                cubeArray[z][x][y].position.x = x-2;
                cubeArray[z][x][y].position.y = y-2;
                group.add(cubeArray[z][x][y]);
                
                
                

            }
        }
    }
}



console.log(cubePosition);



group.scale.set(0.5, 0.5, 0.5);
scene.add(group)

const translateArray = [
    [1,0,0],
    [-1,0,0],
    [0,1,0],
    [0,-1,0],
    [0,0,1],
    [0,0,-1]
]
var x = cubeArray[2][3][4].position.toArray().map(function(item, index) {
    // In this case item correspond to currentValue of array a, 
    // using index to get value from array b
    return item - b[index];
};


const animate = function () {
    requestAnimationFrame( animate );
    
    for ( let z = 0; z < 5; z ++ ){
        for( let x = 0; x < 5; x ++){
            for( let y = 0; y < 5; y ++ ){
                //check if the current position in the grid has a cube in it. 
                if (cubePosition[x][y][z] == 1){
                    //Check if the cube is on the edge the cube.

                    
                    

                    
                    
                    
    
                }
            }
        }
    }
    

    renderer.render( scene, camera );
};




animate();