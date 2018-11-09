class Point {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color || "rgba(155,255,0,0.4)";
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.arc(this.x,this.y,5,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }

  print(context,text){
    context.fillStyle = "black";
    context.font = "14px Arial";
    context.fillText(text,this.x+8,this.y+10);
  }

  position(pos){
    this.x = pos.dx;
    this.y = pos.dy;
  }

    distanceToOtherPoint(p){
      let dx = this.x - p.x;
      let dy = this.y - p.y;
      return Math.sqrt(dx*dx + dy*dy)
    }

    drag(){
      let mousePosition={};
      let dragStatus = false;
      console.log('point is gonna be dragged');
      document.addEventListener('mousedown',(evt)=>{
        mousePosition.x = evt.clientX;
        mousePosition.y = evt.clientY

        console.log(this.distanceToOtherPoint(mousePosition),this.r);
        if(this.distanceToOtherPoint(mousePosition)<= this.r){
          dragStatus = true;
        }else{
          dragStatus = false;
      };
      console.log(dragStatus);
      });

      document.addEventListener("mousemove",(evt)=>{
        if(dragStatus == true){

        }
      })
    }
  }
