const table = [
    "Emma", 25, "F", 1, 1,
    "Liam", 31, "M", 18, 1,
    "Olivia", 29, "F", 1, 2,
    "Noah", 26, "M", 2, 2,
    "Ava", 24, "F", 13, 2,
    "James", 30, "M", 14, 2,
    "Isabella", 28, "F", 15, 2,
    "Ethan", 27, "M", 16, 2,
    "Sophia", 23, "F", 17, 2,
    "Mia", 22, "F", 18, 2,
    "Alexander", 35, "M", 1, 3,
    "Charlotte", 32, "F", 2, 3,
    "Rudy", 29, "M", 13, 3,
    "Harper", 27, "F", 14, 3,
    "Mikey", 34, "M", 15, 3,
    "Ariel", 28, "F", 16, 3,
    "Isaac", 30, "M", 17, 3,
    "Abigail", 25, "F", 18, 3,
    "Yulius", 33, "M", 1, 4,
    "Sofia", 26, "F", 2, 4,
    "Arius", 31, "M", 3, 4,
    "Ella", 29, "F", 4, 4,
    "David", 30, "M", 5, 4,
    "Avery", 28, "F", 6, 4,
    "Reinee", 27, "M", 7, 4,
    "Preetysha", 24, "F", 8, 4,
    "ZiYing", 26, "F", 9, 4,
    "Lucas", 25, "M", 10, 4,
    "Benjamin", 32, "M", 11, 4,
    "Scarlett", 30, "F", 12, 4,
    "Aria", 28, "F", 13, 4,
    "Saria", 29, "M", 14, 4,
    "Joshua", 24, "M", 15, 4,
    "Essrin", 27, "F", 16, 4,
    "Lucas", 33, "M", 17, 4,
    "Victoria", 31, "F", 18, 4,
    "Oliver", 25, "M", 1, 5,
    "KahBoon", 26, "F", 2, 5,
    "Daniel", 28, "M", 3, 5,
    "Tang", 30, "F", 4, 5,
    "Thomas", 29, "M", 5, 5,
    "Angela", 27, "F", 6, 5,
    "DeHao", 31, "M", 7, 5,
    "Sherin", 32, "F", 8, 5,
    "Alex", 33, "M", 9, 5,
    "Alice", 24, "F", 10, 5,
    "Elijah", 25, "M", 11, 5,
    "Haysvina", 26, "F", 12, 5,
    "Amelia", 28, "F", 13, 5,
    "Shinn", 30, "M", 14, 5,
    "Abigail", 27, "F", 15, 5,
    "Sebastian", 29, "M", 16, 5,
    "Lynn", 31, "F", 17, 5,
    "Logan", 32, "M", 18, 5,
    "Wendy", 25, "F", 1, 6,
    "Michael", 26, "M", 2, 6,
    "Jacob", 28, "M", 4, 9,
    "Shreeya", 30, "F", 5, 9,
    "William", 27, "M", 6, 9,
    "Syeda", 29, "F", 7, 9,
    "Asleigh", 24, "F", 8, 9,
    "Browdy", 31, "M", 9, 9,
    "Mili", 32, "F", 10, 9,
    "Aiden", 33, "M", 11, 9,
    "Angelina", 26, "F", 12, 9,
    "Danny", 25, "M", 13, 9,
    "Gwen", 28, "F", 14, 9,
    "Matthew", 30, "M", 15, 9,
    "Chynthia", 27, "F", 16, 9,
    "Douglas", 29, "M", 17, 9,
    "Adrian", 31, "M", 18, 9,
    "Duke", 27, "M", 4, 6,
    "Jingen", 25, "F", 5, 6,
    "Bob", 29, "M", 6, 6,
    "Christine", 31, "F", 7, 6,
    "Aaron", 28, "M", 8, 6,
    "Angel", 26, "F", 9, 6,
    "YongJet", 30, "M", 10, 6,
    "Visvanth", 32, "F", 11, 6,
    "Kevin", 33, "M", 12, 6,
    "Lillian", 24, "F", 13, 6,
    "William", 26, "M", 14, 6,
    "YiKheng", 29, "F", 15, 6,
    "Robin", 27, "F", 16, 6,
    "Jane", 28, "M", 17, 6,
    "HuiWen", 30, "F", 18, 6,
    "Tommy", 25, "M", 1, 7,
    "Shereen", 26, "F", 2, 7,
    "Kimberly", 29, "M", 4, 10,
    "Sagar", 31, "F", 5, 10,
    "Agnes", 28, "M", 6, 10,
    "Vignesh", 27, "F", 7, 10,
    "Richard", 30, "M", 8, 10,
    "Emily", 32, "F", 9, 10,
    "Royce", 33, "M", 10, 10,
    "LerLer", 24, "F", 11, 10,
    "Luke", 26, "M", 12, 10,
    "Madeline", 28, "F", 13, 10,
    "Matthew", 27, "M", 14, 10,
    "Grace", 29, "F", 15, 10,
    "Darren", 25, "M", 16, 10,
    "Gavin", 31, "M", 17, 10,
    "Elizabeth", 30, "F", 18, 10,
    "Bryan", 26, "M", 4, 7,
    "Sanjeet", 28, "F", 5, 7,
    "Danny", 30, "M", 6, 7,
    "Linda", 33, "F", 7, 7,
    "Ash", 29, "M", 8, 7,
    "Yuki", 25, "F", 9, 7,
    "Tehern", 31, "M", 10, 7,
    "Roxy", 32, "F", 11, 7,
    "Jackson", 27, "M", 12, 7,
    "Chris", 28, "F", 13, 7,
    "Elijah", 26, "M", 14, 7,
    "Samantha", 30, "F", 15, 7,
    "Rem", 33, "F", 16, 7,
    "Levi", 29, "M", 17, 7,
    "Jacqueline", 31, "F", 18, 7
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = { simple: [], table: [], sphere: [], helix: [], grid: [], cone: [] };

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
    addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    if (table[i + 2] == "F") {
        element.style.backgroundColor = 'rgba(255,20,147' + (Math.random() * 0.5 + 0.25) + ')';
    } else {
        element.style.backgroundColor = 'rgba(0,0,255' + (Math.random() * 0.5 + 0.25) + ')';
    }


    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', () => elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i) {

    transform(targets.table, 1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
    let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
        addConeObject(coneVector, i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function addConeObject(coneVector, index) {
    const theta = index * 4 + Math.PI;
    const y = - (index * 12) + 450;
    let object = new THREE.Object3D;

    object.position.setFromCylindricalCoords(theta, y);

    coneVector.x = object.position.x * 2;
    coneVector.y = object.position.y;
    coneVector.z = object.position.z * 2;

    object.lookAt(coneVector);
    targets.cone.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}

