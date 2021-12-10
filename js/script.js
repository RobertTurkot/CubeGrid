import * as THREE from 'https://cdn.skypack.dev/three@0.134.0'
import { OrbitControls } from '/examples/jsm/controls/OrbitControls.js';

// Constants
const speed = 0.5;

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xbfe3dd );
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
camera.position.set( 2, 2, 10 );

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 2, 2, 3 );
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const group = new THREE.Group();

var cubeArray = [];

//Go through the cube, and decide the starting  ons of the cubes inside of it, as well as how many will be displayed.
//If the position that is currently being iterated is a position of a cube, create a cube in the cubeArray array. 
for ( let x = 0; x < 5; x ++ ) {
	cubeArray.push([]);
	for( let y = 0; y < 5; y ++) {
		cubeArray[x].push([]);
		for( let z = 0; z < 5; z ++ ) {
			if (Math.random(1) + 0.5 >= 1) {
				// Get a random colour
				const material = new THREE.MeshBasicMaterial( { color: Math.floor(Math.random()*16777215)} );

				// Create a new cube
				cubeArray[x][y][z] = new THREE.Mesh( geometry, material );

				// Set the cube's position
				cubeArray[x][y][z].position.set( x, y, z );

				// Add the cube to the group
				group.add(cubeArray[x][y][z]);
			}
		}
	}
}

group.position.set(0,2,-2)
scene.add(group)


let directions = [
	[-1,  0,  0 ],
	[ 1,  0,  0 ],
	[ 0, -1,  0 ],
	[ 0,  1,  0 ],
	[ 0,  0, -1 ],
	[ 0,  0,  1 ]
];

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}


let vec3add = (vec0, vec1) => (vec0.map( (item, index) => item + vec1[index] ));

let clock = new THREE.Clock();
let time = 0;

const animate = function () {
	requestAnimationFrame( animate );
	
	// Get time since last frame
	let deltaTime = clock.getDelta();
	time += deltaTime;

	// Check if we need to move cubes
	if ( time >= 5.0 ) {
		// Reset the timer
		time = 0;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
		// Loop over the cubes
		for( let x = 0; x < 5; x++) {
			for( let y = 0; y < 5; y++ ) {
				for( let z = 0; z < 5; z++ ) {
					// Check if there is a cube at that position
					if( cubeArray[x][y][z] == undefined ) continue;

					// Check if the cube has already been moved
					if( cubeArray[x][y][z].moved ) continue;
					
					// Add a random bias on whether this cube will move - if 
					// the number is more than 1 then it will not move.
					if (Math.random(1) + 0.7 >= 1) continue;

					// Get a valid position for the cube to move to
					outer:
					for(let offset of directions) {
						// Get the position to check
						let testPos = vec3add([ x, y, z ], offset);
			
						// Check if the position is within the bounds
						for(let component of testPos) {
							if(component < 0 || component > 4) {
								continue outer;
							}
						}
						if( cubeArray[testPos[0]][testPos[1]][testPos[2]] != undefined ) continue; 
						// The position is valid, so move the cube
						let cube = cubeArray[x][y][z];
						cube.moved = true;
						cubeArray[testPos[0]][testPos[1]][testPos[2]] = cube;
						cubeArray[x][y][z] = "moved";


						// Shuffle the array before use
						shuffleArray(directions);
						break;
					}
				}
			}
		}

		// Reset the moved flag
		for( let x = 0; x < 5; x++) {
			for( let y = 0; y < 5; y++ ) {
				for( let z = 0; z < 5; z++ ) {
					// Check if there is a cube at that position
					if( cubeArray[x][y][z] == undefined ) continue;

					if( cubeArray[x][y][z] == "moved" ) {
						cubeArray[x][y][z] = undefined;
					} else {
						// Reset the flag
						cubeArray[x][y][z].moved = false;
					}
				
				}
			}
		}
	}

	// Animate the cubes to their new position
	for( let x = 0; x < 5; x++) {
		for( let y = 0; y < 5; y++ ) {
			for( let z = 0; z < 5; z++ ) {
				// Check if there is a cube at that position
				if( cubeArray[x][y][z] == undefined ) continue;
			
				// Calculate cubes expected position
				let expected = new THREE.Vector3( x, y, z );
				let diff = expected.sub(cubeArray[x][y][z].position);

				// Check if we're at the correct positon
				if( diff.length() == 0 ) continue;

				// Shift the cube
				diff.normalize();
				diff.multiplyScalar(speed * deltaTime);
				cubeArray[x][y][z].position.add(diff);
			}
		}
	}


	group.rotation.x += 1 * deltaTime;
	//group.rotation.y += 1 * deltaTime;
	// Update the camera view
	controls.update();

	renderer.render( scene, camera );
};

animate();