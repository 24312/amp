const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,20,"red");
let B = new Point(800,300,20,"blue");
let C = new Point(600,100,25,"purple");


let S = new Point(0,0,30,"white");
let T = new Point(0,0,30,"green");
let U = new Point(0,0,30,"black");

let l = new LinearFunction(1,1);
let b = new LinearFunction(1,1);
let c = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);
let o = new LinearFunction(1,1);

A.drag();
B.drag();
C.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  l.letTwoPointsDefineLine(A,B);
  b.letTwoPointsDefineLine(A,C);
  c.letTwoPointsDefineLine(C,B);
  m.slope = -1/l.slope;
  m.intercept = C.y - m.slope*C.x;
  n.slope = -1/b.slope;
  n.intercept = B - n.slope*B.x;
  o.slope = -1/c.slope;
  o.intercept = A.y - o.slope*A.x;

  l.draw(context);
  b.draw(context);
  c.draw(context);
  m.draw(context);
  n.draw(context);
  o.draw(context);


  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;
  T.x = b.intersection(n).x;
  T.y = b.intersection(n).y;
  U.x = c.intersection(o).x;
  U.y = c.intersection(o).y;


  A.draw(context);
  B.draw(context);
  C.draw(context);


  S.draw(context);
  T.draw(context);
  U.draw(context);

}

animate();
