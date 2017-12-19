'use strict'

$(document).ready(function(){
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let end = window.innerWidth;
  canvas.width = end;
  conveyor();

function conveyor(){
let lxS = [[0,10],[0,30],[0,70]];
let lxE = [[end,10],[end,30],[end,70]];
let ax = [50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250,
  1350, 1450, 1550, 1650, 1750, 1850, 1950, 2050, 2150, 2250, 2350];
  for (var i = 0; i < lxS.length; i++) {
    ctx.beginPath();
    ctx.moveTo(lxS[i][0],lxS[i][1]);
    ctx.lineTo(lxE[i][0],lxE[i][1]);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  for (var i = 0; i < ax.length; i++) {
    ctx.beginPath();
    ctx.arc(ax[i],50,15,0, Math.PI * 2, true);
    ctx.stroke();
  }
};
let x = 150;
let dx = 100;
function animation(){
  requestAnimationFrame(animation);
  // for (var i = 0; i <= end; i+=150) {
    // dx+=1000
    // mToX += 150;
    // lToX += 200;
    ctx.beginPath();
    ctx.moveTo(x-150,10);
    ctx.lineTo(x+=dx,30);
    ctx.stroke();
    ctx.clearRect(0,0);
 // }
};

animation();

});
