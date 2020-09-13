// Create variables for all the KEYS. For example
var keyA  , keyAS ,keyB ,keyC,keyCS,keyD,keyDS,keyE,keyF,keyFS,keyG,keyGS,  KEYS; 
var piano,piano1;
var soundA,soundAS,soundB,soundC,soundCS,soundD,soundDS,soundE,soundF,soundFS,soundG,soundGS,sounds;
var welcomeImg;
var form;
var nextImg;
var view , welcome;

const WELCOME = 0;
const PLAY = 1;
const COMPLETE = 2;
const TARGET_COMPLETE = 3;
var gameState = WELCOME;


function preload(){
  
  soundC = loadSound("sounds/piano_middle_C.mp3"); 
  soundD = loadSound("sounds/piano_D.mp3"); 
  soundE = loadSound("sounds/piano_E.mp3"); 
  soundF = loadSound("sounds/piano_F.mp3"); 
  soundG= loadSound("sounds/piano_G.mp3"); 
  soundA = loadSound("sounds/piano_A.mp3"); 
  soundB = loadSound("sounds/piano_B.mp3"); 
  soundCS = loadSound("sounds/piano_C_sharp.mp3"); 
  soundDS = loadSound("sounds/piano_D_sharp.mp3"); 
  soundFS = loadSound("sounds/piano_F_sharp.mp3"); 
  soundGS = loadSound("sounds/piano_G_sharp.mp3"); 
  soundAS = loadSound("sounds/piano_A_sharp.mp3"); 
  welcomeImg = loadImage("images/saraswati.jpg");
  nextImg = loadImage("images/next.jpg");
  
}

function setup (){

  createCanvas(displayWidth-50,displayHeight-50);

   form  = new Form;

 
 }

 function draw() {
  
  background("YELLOW");
  
  createEdgeSprites();

  if(gameState === WELCOME){
    imageMode(CENTER);
    image(welcomeImg,displayWidth/2-200,displayHeight/2,600,600);
    welcome = new Welcome();
    welcome.display();
   // console.log("checking for welcome screen");
  }
 
 
 
 form.display();
 
  drawSprites();
 
}