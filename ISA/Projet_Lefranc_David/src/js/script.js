/*var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 300 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/*var light = new THREE.SpotLight( 0xb4e7f2, 0.8 );
light.angle = Math.PI / 5;*/

/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/
//scene.add( light );

/*
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
  /*cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;*/


/*
	ship.rotation.x += 0.01;
	ship.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();*/


//DANS UN INIT//
//  window.addEventListener( 'resize', onWindowResize, false );
// FONCTION onWindowResize
/*			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
*/


var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//CONTROLS//
//var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls = new THREE.TrackballControls( camera );
controls.addEventListener( 'change', render );


//Load background texture
var loader = new THREE.TextureLoader();
loader.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg' , function(texture)
            {
             scene.background = texture;
            });


//LIGHTS//
var light1 = new THREE.DirectionalLight( 0xb4e7f2, 1.5 );
var light2 = new THREE.DirectionalLight( 0xee0000, 1.5 );
var light3 = new THREE.DirectionalLight( 0x65e548, 1.5 );

light2.position.x = 3;
light3.position.y = -3;
scene.add( light1 );
scene.add( light2 );
scene.add( light3 );

//FORMS//
var geometry = new THREE.SphereGeometry( 1, 36, 16 );
var materialBasic = new THREE.MeshStandardMaterial();
var materialPhong = new THREE.MeshPhongMaterial();
var sphere1 = new THREE.Mesh( geometry, materialBasic );
var sphere2 = new THREE.Mesh( geometry, materialPhong );

sphere2.position.x = -3;
//scene.add( cube );
camera.position.z = 5;

var group = new THREE.Group();
scene.add( group );
group.add( sphere1 );
group.add( sphere2 );

//OBJECT LOADER//
/*
var loader = new THREE.ObjectLoader();

loader.load("../medias/models/vaisseau.json", function( group ) {
  mesh = group.children[0];
  mesh.material = new THREE.MeshPhongMaterial();
  scene.add( mesh );
});

var objectLoader = new THREE.ObjectLoader();
				objectLoader.load( "../medias/models/vaisseau.json", function ( obj ) {
				 	scene.add( obj );
				} );
*/
//MAIN//
var render = function () {
  requestAnimationFrame( render );
  controls.update();

  sphere1.rotation.x += 0.1;
  sphere1.rotation.y += 0.1;

  sphere2.rotation.x += 0.1;
  sphere2.rotation.y += 0.1;

  renderer.render( scene, camera );
};

render();
