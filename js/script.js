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

const translateArray = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]




const group = new THREE.Group();

//Go through the cube, and decide the starting  ons of the cubes inside of it, as well as how many will be displayed.
//If the position that is currently being iterated is a position of a cube, create a cube in the cubeArray array. 
for ( let x = 0; x < 5; x ++ ){
    for( let y = 0; y < 5; y ++){
        for( let z = 0; z < 5; z ++ ){
            if (Math.random(1) + 0.5 >= 1){
                const material = new THREE.MeshBasicMaterial( { color: Math.floor(Math.random()*16777215)} );
                cubeArray[x][y][z] = new THREE.Mesh( geometry, material );
                cubePosition[x][y][z] = 1;

                cubeArray[x][y][z].position.x = x-2;
                cubeArray[x][y][z].position.y = y-2;
                cubeArray[x][y][z].position.z = z-2;
                group.add(cubeArray[x][y][z]);
                
                
                

            }
        }
    }
}







group.scale.set(0.5, 0.5, 0.5);
scene.add(group)






console.log(cubeArray[0][0][0].position.toArray())


const animate = function () {
    requestAnimationFrame( animate );
    let directions = [
        [-1,  0,  0],
        [ 1,  0,  0],
        [ 0, -1,  0],
        [ 0,  1,  0],
        [ 0,  0, -1],
        [ 0,  0,  1]
    ];
    
    let position = [0, 0, 0];
    let vec3add = (vec0, vec1) => (vec0.map( (item, index) => item + vec1[index] ));
    
    outer:
    for(let offset of directions) {
        // Get the position to check
        let testPos = vec3add(position, offset);
    
        // Check if the position is within the bounds
        for(let component of testPos) {
            if(component < 0 || component > 4) {
                continue outer;
            }
        }
    
        // The position is valid, so move the cube
        // ROBA: Do shit here
        console.log(testPos);
    }
    
    

    renderer.render( scene, camera );
};




animate();