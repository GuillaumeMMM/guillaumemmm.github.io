
const PRELOAD_COUNT = 7;
const REGULAR_GAP = 0.05;
const DENSITY = 0.5;
const SQUARE_SIZE = 2;
const INITIAL_SPEED = 0.3;
const INITIAL_DENSITY = 0.5;
const INITIAL_SPACE_BETWEEN_LABS = 30;

const SPACESHIP_MODEL_OFFSET_X = -5;
const SPACESHIP_MODEL_OFFSET_Y = -7;

let loaded = false;

var scene = new THREE.Scene();
scene.background = new THREE.Color('blue');

var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry1 = new THREE.BoxGeometry(SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
var material = new THREE.MeshPhongMaterial({ color: 'red', transparent: true, opacity: 1 });

let loadedArrays = [];
let loadedArraysBlocksDetails = [];
let nextLab = 0;
let gameOn = false;
let speed = INITIAL_SPEED;
let density = INITIAL_DENSITY

//  Add an array to the scene
addArrayToScene = function (index) {
    const labArray = getRandLabArray2(10, 10, DENSITY);
    loadedArrays.push(- INITIAL_SPACE_BETWEEN_LABS * index);
    loadedArraysBlocksDetails.push(labArray);
    labArray.forEach((block, ind) => {
        var cube = new THREE.Mesh(geometry1, material);
        cube.position.set((SQUARE_SIZE + REGULAR_GAP) * block.x, (SQUARE_SIZE + REGULAR_GAP) * block.y, - INITIAL_SPACE_BETWEEN_LABS * index);
        cube.name = 'id-' + loadedArrays.length + '-' + ind;
        scene.add(cube);
    });
}

addLabAtPosition = function (position) {
    const labArray = getRandLabArray2(10, 10, DENSITY);
    loadedArrays.push(- INITIAL_SPACE_BETWEEN_LABS * position);
    loadedArraysBlocksDetails.push(labArray);
    labArray.forEach((block, ind) => {
        var cube = new THREE.Mesh(geometry1, material);
        cube.position.set((SQUARE_SIZE + REGULAR_GAP) * block.x, (SQUARE_SIZE + REGULAR_GAP) * block.y, - INITIAL_SPACE_BETWEEN_LABS * position);
        cube.name = 'id-' + loadedArrays.length + '-' + ind;
        scene.add(cube);
    });
}

cameraOnASquare = function (index, cameraX, cameraY) {
    let onASquare = false;
    loadedArraysBlocksDetails[index].forEach((block) => {
        if (cameraX > (2 * block.x) && cameraX <= (2 * (block.x + 1)) && cameraY > (2 * block.y) && cameraY <= (2 * (block.y + 1))) {
            onASquare = true;
        }
    });
    return onASquare;
}

removeAllSquares = function (refArray) {
    for (let i = 0; i < refArray.length + 1; i++) {
        let j = 0;
        while (scene.getObjectByName('id-' + i + '-' + j) && j < 100) {
            const selectedObject = scene.getObjectByName('id-' + i + '-' + j);
            scene.remove(selectedObject);
            j++
        }
    }
}

let text;

gameOver = function (score) {
    let bestScore = 0;
    console.log(typeof(localStorage.getItem('bestScore')));
    if (localStorage.getItem('bestScore')) {
        bestScore = Number(JSON.parse(localStorage.getItem('bestScore')));
        if (score > bestScore) {
            localStorage.setItem('bestScore', JSON.stringify(score));
        }
    } else {
        localStorage.setItem('bestScore', JSON.stringify(score));
    }
    scene.remove(scene.getObjectByName('spaceship'));

    var loader = new THREE.FontLoader();

    loader.load('./node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function (font) {

        var textGeometry = new THREE.TextGeometry('GAME OVER', {
            font: font,
            size: 10,
            height: 3,
            // curveSegments: 12,
            // bevelEnabled: true,
            // bevelThickness: 10,
            // bevelSize: 8,
            // bevelSegments: 5
        });
        var textGeometry2 = new THREE.TextGeometry('Score : ' + score + ' (best: ' + Math.max(score, bestScore) + ')', {
            font: font,
            size: 4,
            height: 0.3,
            // curveSegments: 12,
            // bevelEnabled: true,
            // bevelThickness: 10,
            // bevelSize: 8,
            // bevelSegments: 5
        });
        var textGeometry3 = new THREE.TextGeometry('Click to restart ', {
            font: font,
            size: 4,
            height: 0.3,
            // curveSegments: 12,
            // bevelEnabled: true,
            // bevelThickness: 10,
            // bevelSize: 8,
            // bevelSegments: 5
        });
        var material3 = new THREE.MeshPhongMaterial({
            color: 'yellow'
        });
        text = new THREE.Mesh(textGeometry, material3);
        text.position.set(camera.position.x - 40, camera.position.y, camera.position.z - 30);
        text.name = 'gameover';
        // text.rotation.x = Math.PI/2;
        scene.add(text);

        text2 = new THREE.Mesh(textGeometry2, material3);
        text2.position.set(camera.position.x - 40, camera.position.y + 20, camera.position.z - 30);
        text2.name = 'score';
        // text.rotation.x = Math.PI/2;
        scene.add(text2);

        text3 = new THREE.Mesh(textGeometry3, material3);
        text3.position.set(camera.position.x - 20, camera.position.y - 30, camera.position.z - 30);
        text3.name = 'restart';
        // text.rotation.x = Math.PI/2;
        scene.add(text3);
    });
}

//  Spot light
var light = new THREE.PointLight(0xffffff);
light.position.set(0, 12, 15);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff);
light.position.set(0, 12, -15);
scene.add(light2);

let goLeft = false;
let goRight = false;
let goTop = false;
let goDown = false;

document.onclick = function () {
    if (!gameOn) {
        gameInit();
        const selectedObject = scene.getObjectByName('gameover');
        scene.remove(selectedObject);
        const selectedObject2 = scene.getObjectByName('score');
        scene.remove(selectedObject2);
        const selectedObject3 = scene.getObjectByName('restart');
        scene.remove(selectedObject3);
    }
}

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            goLeft = true;
            break;
        case 39:
            goRight = true;
            break;
        case 38:
            goTop = true;
            break;
        case 40:
            goDown = true;
            break;
    }
}

document.onkeyup = function (e) {
    switch (e.keyCode) {
        case 37:
            goLeft = false;
            break;
        case 39:
            goRight = false;
            break;
        case 38:
            goTop = false;
            break;
        case 40:
            goDown = false;
            break;
    }
}

gameInit = function () {
    loadedArrays = [];
    loadedArraysBlocksDetails = [];
    nextLab = 0;
    speed = INITIAL_SPEED;
    density = INITIAL_DENSITY;

    for (let i = 1; i < PRELOAD_COUNT + 1; i++) {
        addArrayToScene(i);
    }

    camera.position.z = 10;
    camera.position.x = 10;
    camera.position.y = 10;

    goLeft = false;
    goRight = false;
    goTop = false;
    goDown = false;

    // loadSpaceshipModel = function() {
    //     //LOADING MODEL
    
    //     // instantiate a loader
    //     var loader = new THREE.OBJLoader();
    //     // load a resource
    //     loader.load(
    //         // resource URL
    //         'models/Spaceship/Broadhead.obj',
    //         // called when resource is loaded
    //         function ( object ) {
    //             object.rotation.y  = Math.PI / 2;
    //             object.position.set(camera.position.x - 0.7, camera.position.y - 5, camera.position.z - 6);
    //             object.name = 'spaceship';
    //             scene.add( object );
    //             loaded = true;
    //         },
    //         // called when loading is in progresses
    //         function ( xhr ) {
    //             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    //         },
    //         // called when loading has errors
    //         function ( error ) {
    //             console.log( 'An error happened' );
    //         }
    //     );
    
    // }
    // loadSpaceshipModel();

    gameOn = true;
}
gameInit();

function rotateAroundObjectAxis( object, axis, radians ) {

    var rotationMatrix = new THREE.Matrix4();

    rotationMatrix.makeRotationAxis( axis.normalize(), radians );
    object.matrix.multiplySelf( rotationMatrix );                       // post-multiply
    object.rotation.setRotationFromMatrix( object.matrix );
}


function animate() {
    requestAnimationFrame(animate);

    // if (gameOn && loaded) {
        if (gameOn) {

        if (nextLab > 10) {
            speed = 0.35;
            density= 0.7;
        }

        // if (goLeft) {
        //     const axis = new THREE.Vector3(1,0,0);
        //     // quaternion = new THREE.Quaternion().setFromAxisAngle( axis, 0.01);
        //     // rotateAboutWorldAxis(scene.getObjectByName('spaceship'), new THREE.Vector3(0,0,1), 10);
        //     rotateAroundObjectAxis(scene.getObjectByName('spaceship'), axis, 0.01);
        // }

        if (goLeft && camera.position.x > 0.1) {
            camera.position.x -= 0.1;
        }
        if (goRight && camera.position.x < 20 * (1 + REGULAR_GAP)) {
            camera.position.x += 0.1;
        }
        if (goTop && camera.position.y < 20 * (1 + REGULAR_GAP)) {
            camera.position.y += 0.1;
        }
        if (goDown && camera.position.y > 0.1) {
            camera.position.y -= 0.1;
        }

        // scene.getObjectByName('spaceship').position.z -= speed;
        // scene.getObjectByName('spaceship').position.x = camera.position.x + SPACESHIP_MODEL_OFFSET_X;
        // scene.getObjectByName('spaceship').position.y = camera.position.y + SPACESHIP_MODEL_OFFSET_Y;

        camera.position.z -= speed;
        if (camera.position.z < loadedArrays[nextLab]) {
            if (cameraOnASquare(nextLab, camera.position.x, camera.position.y)) {
                console.log('GAME OVER');
                gameOn = false;
                removeAllSquares(loadedArrays);
                gameOver(nextLab);
            } else {
                nextLab++;
                addLabAtPosition(nextLab + PRELOAD_COUNT);
            }
        }
    }else {
        if (!gameOn) {
            text.rotation.x += 0.05;
        }
    }
    renderer.render(scene, camera);
}
animate();