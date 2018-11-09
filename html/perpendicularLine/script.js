const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,20,"red");
let B = new Point(800,300,20,"blue");
let C = new Point(600,100,25,"purple");


let S = new Point(0,0,30,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);


A.drag();
B.drag();
C.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  l.letTwoPointsDefineLine(A,B);
  m.slope = -1/l.slope;
  m.intercept = C.y - m.slope*C.x;


  l.draw(context);
  m.draw(context);

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;


  A.draw(context);
  B.draw(context);
  C.draw(context);


  S.draw(context);

}

animate();
