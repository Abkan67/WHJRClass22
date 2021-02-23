var game=true;
var canvas;
var music;
var box;
var box1,box2,box3,box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(Math.random()*790+5,Math.random()*495+5, 40,40); box.shapeColor="white";
    box.velocityX=3+Math.random(); box.velocityY=4+Math.random();
    box1=createSprite(100,550,200,100); box1.shapeColor="red";
    box2=createSprite(300,550,200,100); box2.shapeColor="blue";
    box3=createSprite(500,550,200,100); box3.shapeColor="green";
    box4=createSprite(700,550,200,100); box4.shapeColor="yellow";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(game){
    if(box1.isTouching(box)&&box.bounceOff(box1)){
        box.dy*=-1.03; box.shapeColor="red"; music.play(); 
    }
    if(box4.isTouching(box)&&box.bounceOff(box4)){
        box.dy*=-1.05; box.shapeColor="yellow"; music.play();
    }
    if(box2.isTouching(box)&&box.bounceOff(box2)){
        box.dy*=-1.2; box.shapeColor="blue"; music.play();
    }
    if(box3.isTouching(box)&&box.bounceOff(box3)){
        music.stop(); box.velocityX=0;box.velocityY=0; box.shapeColor="black"; game=false;
    }
}
    drawSprites();
}
