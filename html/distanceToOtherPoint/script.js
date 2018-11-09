const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let kineticObjects = [];

let kineticObject = ();
kineticObject.point = new Point(200,300,"blue");
kineticObject.pos = new Vector2d(800,300);
kineticObject.vel = new Vector2d(0,2);
kineticObject.acc = new Vector2d(0,1);

function animate(){
  requestAnimationFrame(animate){
    context.clearRect(0,0,canvas.width, canvas.height);

  }
}
