import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 3;

const light = new THREE.DirectionalLight(0xcccccc, 1.4);
light.position.set(15,13,15);
scene.add(light);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.SphereGeometry(1,32,32);
const material = new THREE.MeshPhongMaterial();

material.map= new THREE.TextureLoader().load('textures/diffuse_moon.jpg');
material.bumpMap = new THREE.TextureLoader().load('textures/bump_moon.jpg');
material.bumpScale =.015;

document.addEventListener('click', (e) => {
  // material.bumpScale += 0.02;
});

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const starsGeometry = new THREE.SphereGeometry(4, 32,32);
const starsMaterial = new THREE.MeshBasicMaterial();
const starsMesh = new THREE.Mesh(starsGeometry, starsMaterial);

starsMaterial.map = new THREE.TextureLoader().load('textures/stars.jpeg');
starsMaterial.side= THREE.BackSide;
scene.add(starsMesh);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    mesh.rotation.x += 0.001
    mesh.rotation.y += 0.002

    render()
}

function render() {
    renderer.render(scene, camera)

}

animate()

document.addEventListener('mousemove', (e) => {
  camera.position.x = (e.x - (window.innerWidth / 2)) * 0.005;
  camera.lookAt(scene.position);
});

