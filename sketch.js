//let nb;
//let nb2;
//let nb3;
let nbarray = [];
// 初始內容
var img;
function preload(){
 //載入圖片檔案
 img=loadImage("earth.png");
}
function setup() {
  createCanvas(600, 600, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<1;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(50,-height/2+(height/5)*i,0,50));
  }
  //nb = new myBox(50,50,0,50);
  //nb2 = new myBox(-50,150,0,25);
  //nb3 = new myBox(-150,100,0,50);
}
function draw() {
  background(mouseX,255,mouseY);
  imageMode(CENTER);
 //繪製圖片
 image(img,0,0,150,150);
  
  
  if(mouseIsPressed){
    circle(mouseX, mouseY, 40);
    noStroke();
    fill(mouseX, mouseY, 0);
    
  }else{
    
  }
  
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    /*
    if (mouseIsPressed){
      fill(0,255,0);
    }else{
      fill(255,0,0);
    }
    */
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 1;
    // 隨機產生物件顏色
    this.cc = color(random(255),0,0);
    // 衛星的中心xyz = 物件，衛星的大小 < 物件， 衛星的距離自訂
    this.stela = new stela(this.x,this.y,this.z,this.size*0.25,this.size);
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
   if(mouseIsPressed)  {
    rectMode(CENTER); 
     
     translate(0, -20);
  translate(p5.Vector.fromAngle(millis() / 500, 200));
     
  rect(0, 0, 0, 0);
    
      
        rotateX(frameCount*0.1);
        rotateY(frameCount*0.1);
        rotateZ(frameCount*0.1);
        
      this.stela.display();
      noFill();
    stroke(0,0,0);
    
      sphere(50);
   }
    
    rectMode(CENTER); 
     
     translate(0, -20);
  translate(p5.Vector.fromAngle(millis() / 500, 200));
  rect(0, 0, 0, 0);
    
      
        rotateX(frameCount*0.1);
        rotateY(frameCount*0.1);
        rotateZ(frameCount*0.1);
        
      this.stela.display();
      noFill();
    stroke(0,0,0);
    box(30);
    pop();
    
  }
  
  //能力2:移動規則
  move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
}
// 衛星
class stela{
  constructor(x,y,z,size,cdx){
    //衛星的旋轉中心
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    // 衛星距離旋轉中心的x距離
    this.cdx=cdx;
    // 隨機產生物件顏色
    this.cc = color(random(255),0,0);
  }
  display(){
    
     
    push();
      rotateZ(frameCount*0.03);
    rotateX(frameCount*0.02);
    rotateY(frameCount*0.01);
      translate(100,0,0);  
      fill(mouseX, mouseY, 120);
      noStroke();
      sphere(10);
    rotateZ(frameCount*0.04);
    rotateX(frameCount*0.09);
    rotateY(frameCount*0.02);
      translate(120,0,0);  
      fill(255);
      noStroke();
      box(10);
        rotateZ(frameCount*0.1);
    rotateX(frameCount*0.01);
    rotateY(frameCount*0.08);
      translate(140,0,0);  
      fill(mouseX, mouseY,185);
      noStroke();
      rect(30, 20, 55, 55, 20);
    rotateZ(frameCount*0.04);
    rotateX(frameCount*0.01);
    rotateY(frameCount*0.02);
      translate(120,0,0);  
      fill(mouseX, mouseY, 255);
      noStroke();
    
triangle(30, 75, 58, 20, 86, 75);
    pop();
    
    
  }

  
}