
// Source: https://codepen.io/xavier_bs/pen/MMNGyG

const canvas = document.getElementById('hangman');
const context = canvas.getContext("2d");


// Function to load the canvas with the gallows
function initiateHangman() {

    context.shadowColor = 'transparent';
    context.strokeStyle = '#444';
    context.lineWidth = 10; 
    context.beginPath();
    context.moveTo(175, 225);
    context.lineTo(5, 225);
    context.moveTo(40, 225);
    context.lineTo(25, 5);
    context.lineTo(100, 5);
    context.lineTo(100, 25);
    context.stroke();
}


function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function Draw(part) {
    switch (part) {

        case 'head':
          context.lineWidth = 5;
          context.strokeStyle = '#00ff00';
          context.shadowColor = '#00ff00';
          context.shadowBlur = 20;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
          context.beginPath();
          context.arc(100, 50, 25, 0, Math.PI*2, true);
          context.closePath();
          context.stroke();

          break;
        
        case 'body':
          context.strokeStyle = '#00ffff';
          context.shadowColor = '#00ffff';
          context.beginPath();
          context.moveTo(100, 75);
          context.lineTo(100, 140);
          context.stroke();
          break;
  
        case 'rightHarm':
          context.strokeStyle = '#ff8000';
          context.shadowColor = '#ff8000';
          context.beginPath();
          context.moveTo(100, 85);
          context.lineTo(60, 100);
          context.stroke();
          break;
  
        case 'leftHarm':
          context.strokeStyle = '#ff33ff';
          context.shadowColor = '#ff33ff';
          context.beginPath();
          context.moveTo(100, 85);
          context.lineTo(140, 100);
          context.stroke();
          break;
  
        case 'rightLeg':
          context.strokeStyle = '#ffff00';
          context.shadowColor = '#ffff00';
          context.beginPath();
          context.moveTo(100, 140);
          context.lineTo(80, 190);
          context.stroke();
          break;
  
  
        case 'leftLeg':
          context.strokeStyle = '#ff0000';
          context.shadowColor = '#ff0000';
          context.beginPath();
          context.moveTo(100, 140);
          context.lineTo(125, 190);
          context.stroke();
        break;

     } 
}


const draws = [
   'head', 
   'body', 
   'rightHarm', 
   'leftHarm',
   'rightLeg',
   'leftLeg',
]

var step = 0;

function drawHangman() {
    Draw(draws[step++]);
}

  
function newHangman() {
    clearCanvas()
    step = 0
  }
