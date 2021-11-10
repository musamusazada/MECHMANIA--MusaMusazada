let canvas;
let ctx;
//Array for storing particles
let particleArr=[];
let gradientColor;
$(window).ready(function(){
     canvas= document.querySelector("#canvas");
     ctx = canvas.getContext("2d");
     canvas.width=window.innerWidth;
     canvas.height=window.innerHeight;
     gradientGenerator();
    createParticles(100);
    animate();
    window.addEventListener("resize",function(){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        cancelAnimationFrame(animate);
        requestAnimationFrame(animate);
    })
  
  
 }) 
function gradientGenerator(){
    gradientColor = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    gradientColor.addColorStop(0, "#219ebc");
    gradientColor.addColorStop(1, "#023e8a");

}
//Particle creator
 function createParticles(n){
    for(let i=0;i<n;i++){
        const particleObj= new particle();
        particleArr.push(particleObj);
    }
 }
//Moves particles and creates line-connections between them.
 function handleParticles(){
     for(let i = 0;i<particleArr.length;i++){
         particleArr[i].move();
         particleArr[i].draw();
       

         for(let j=i+1;j<particleArr.length;j++){
             const dx = particleArr[i].posX-particleArr[j].posX;
             const dy = particleArr[i].posY-particleArr[j].posY;
             const distance=Math.sqrt(dx**2+dy**2);
             if(distance<100){
                 ctx.beginPath()
                 ctx.strokeStyle="white";
                 ctx.moveTo(particleArr[i].posX,particleArr[i].posY);
                 ctx.lineTo(particleArr[j].posX,particleArr[j].posY);
                 ctx.stroke();
             }
         }
         if(particleArr[i].size<=0.6){
            particleArr.splice(i,1);
            i--;
            if(particleArr.length<50){
                createParticles(10)
            }
         }

     }
 }
//Animation runs,clears canvas every time
 function animate(){
     ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
     ctx.font="55px Arial"
     ctx.fillStyle="black"
     ctx.textAlign="center"
     ctx.strokeText("MECHMANIA",canvas.width/2,canvas.height/2);
     handleParticles();
     requestAnimationFrame(animate);
 }
 class particle{
     constructor(){
         this.posX = Math.random()*canvas.width;
         this.posY= Math.random()*canvas.height;
         this.size = Math.random()*30;
         this.speedX= Math.random()*1-0.5;
         this.speedY= Math.random()*1-0.5;  
     }
     draw(){
         ctx.fillStyle=gradientColor;
         ctx.beginPath();
         ctx.arc(this.posX,this.posY,this.size,0,Math.PI*2);
         ctx.fill();
     }
     move(){
        if(this.size>0.5){
            this.size-=0.01;
        }
                this.posX+=this.speedX/10;
                this.posY+=this.speedY/10;                    
     }
 }