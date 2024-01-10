let playerState = "run"
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    playerState = e.target.value
})
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerimage = new Image();
playerimage.src = 'shadow_dog.png'
const spiriteWidth = 575;
const spiriteHeight = 523;


let gameframe = 0;
let staggerframe = 8;
const spriteAnimation = [];
const animationStates = [
    {
        name:'idle',
        frames:7,
    },
    {
        name:'jump',
        frames:7,
    },
    {
        name:'fall',
        frames:7,
    },
    {
        name:'run',
        frames:9,
    },
    {
        name:'dizzy',
        frames:11,
    },
    {
        name:'sit',
        frames:5,
    },
    {
        name:'roll',
        frames:7,
    },
    {
        name:'bite',
        frames:7,
    },
    {
        name:'ko',
        frames:12,
    },
    {
        name:'gethit',
        frames:4,
    },
]
animationStates.forEach((state,index)=>{
    let frames = {
        loc:[],
    }
    for(let j = 0; j<state.frames; j++){
        let positionX = j * spiriteWidth
        let positionY = index * spiriteHeight;
        frames.loc.push({x:positionX,y:positionY})
    }
    spriteAnimation[state.name] = frames
})
function animation(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // ctx.fillRect(50,50,120,120);
    let position = Math.floor(gameframe/staggerframe) % spriteAnimation[playerState].loc.length;
     let frameX = spiriteWidth * position
     let frameY = spriteAnimation[playerState].loc[position].y
    ctx.drawImage(playerimage,frameX,frameY,spiriteWidth,spiriteHeight,0,0,spiriteWidth,spiriteHeight);
    // ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
    // if(gameframe % staggerframe == 0){
    //     if(frameX < 10)frameX++;
    //     else frameX = 0;
    // }
    gameframe++;
    requestAnimationFrame(animation)
}
animation();