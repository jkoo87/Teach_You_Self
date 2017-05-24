// Create the scene, perspective camera (camera that makes far objects appear small and close objects big), and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//(width, height, depth)

// var geometry = new THREE.BoxGeometry(2, 5, 5);
// var material = new THREE.MeshLambertMaterial({color: 0xf6546a})
// var mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh);


//(color, intensity)
var light = new THREE.PointLight(0xffffff, 1.2);
//(x, y, z)
light.position.set(0, 0, 6);
scene.add(light);



var loader = new THREE.JSONLoader();
        loader.load( 'js/untitle.json', function ( geometry ) {
        var mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial() );

                        mesh.position.x =500;
                        mesh.position.y =100;
                        mesh.position.z =500;
        scene.add( mesh );

        });
//move the camera back
camera.position.z = 2;


function render(){
  requestAnimationFrame(render);
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();
