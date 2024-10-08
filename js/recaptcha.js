// const canvas = document.getElementById('XAEXIICanvas');
// const ctx = canvas.getContext('2d');
const XAEXIIInput = document.getElementById('XAEXIIInput');
const resultElement = document.getElementById('result');
let resultXAEIII = false;



let XAEXIIId; // Unique XAEXII identifier
let encodedXAEXII; // Encoded XAEXII value
let rotationAngle = 0; // Track the rotation angle

// Encode a string into Base64
function encodeBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

// Decode a Base64 string
function decodeBase64(str) {
    return decodeURIComponent(escape(atob(str)));
}

function displayBase64Image(base64String) {
    // Create an Image element
    let url = `data:image/png;base64,${base64String}`;
    // Append the image to the document body
    $("[id*=XAEXIIimg]").attr("src", url);
}


function generateXAEXII() {
    $("#XAEXIIInput").val("")
    $("#result").text("")
    $.ajax({
        url: '/api/sitecore/formcaptcha/create',
        method: 'GET',
        success: function(data) {
            displayBase64Image(data.captcha);
            if($('#RecaptchaPopUp').length>0){
                if($('#RecaptchaPopUp').hasClass('OLDCAPTCHA')){
                    $('#RecaptchaPopUp').modal('show');
                    $('#RecaptchaPopUp').modal({backdrop: 'static', keyboard: false});  
                }else if($('#RecaptchaPopUp').hasClass('NEWCAPTCHA')){
                    $("#RecaptchaPopUp").removeClass("hidden");
                    $("body").addClass("modal-open");
                }
            }
        },
        error: function(xhr, status, error) {
            console.log('Error: ' + xhr.status + ' - ' + error);
        }
    });
}

// function drawXAEXII(XAEXIIText) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.save();
//     ctx.translate(canvas.width / 2, canvas.height / 2);
//     ctx.rotate(rotationAngle);
//     ctx.translate(-canvas.width / 2, -canvas.height / 2);
//     ctx.font = '36px Arial';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//     ctx.fillStyle = '#000';

//     // Draw the XAEXII text
//     for (let i = 0; i < XAEXIIText.length; i++) {
//         const x = 30 + i * 30;
//         const y = canvas.height / 2;
//         const angle = Math.random() * 0.5 - 0.25;
//         ctx.save();
//         ctx.translate(x, y);
//         ctx.rotate(angle);
//         ctx.fillText(XAEXIIText[i], 0, 0);
//         ctx.restore();
//     }

//     // Add random lines across the XAEXII text
//     for (let i = 0; i < 10; i++) {
//         ctx.strokeStyle = Math.random() < 0.5 ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)';
//         ctx.lineWidth = 2;
//         ctx.beginPath();
//         const startX = Math.random() * canvas.width;
//         const startY = Math.random() * canvas.height;
//         const endX = Math.random() * canvas.width;
//         const endY = Math.random() * canvas.height;
//         ctx.moveTo(startX, startY);
//         ctx.lineTo(endX, endY);
//         ctx.stroke();
//     }

//     ctx.restore();
// }

function rotateXAEXII() {
    rotationAngle += Math.PI / 6; // Rotate by 30 degrees (π/6 radians)
    drawXAEXII(decodeBase64(encodedXAEXII));
}

// function submitXAEXII() {
//     const userInput = XAEXIIInput.value;
//     const decodedXAEXII = decodeBase64(encodedXAEXII);
//     if(userInput){
//      if(userInput.length===4){
//         if (userInput === decodedXAEXII) {
//             resultXAEIII = true
//             localStorage.setItem('IscaptchaValid', true);
//             generateXAEXII();            
//             } else {
//             resultElement.textContent = 'Captcha is incorrect. Please try again.';
//             resultElement.style.color = 'red';
//             resultXAEIII = false;
//             localStorage.setItem('IscaptchaValid',false);
//             generateXAEXII();
//                 }
//         }else{
//             resultElement.textContent = 'Fill 4 digit Captcha To Validate';
//             resultElement.style.color = 'red';
//             resultXAEIII = false;  
//             localStorage.setItem('IscaptchaValid',false);
//         }
//     }else{
//     resultElement.textContent = 'Fill Captcha To Validate';
//     resultElement.style.color = 'red';
//     resultXAEIII = false;
//     localStorage.setItem('IscaptchaValid',false);
// }
    
// }


//reload captcha
const ReloadImage = document.querySelector('.reload-image');
ReloadImage.addEventListener('click',()=>{
    document.querySelector('#result').innerHTML=' ';
    document.querySelector('#XAEXIIInput').value='';
 })



XAEXIIInput.addEventListener('keyup',(e)=>{
var KeyID = e.keyCode;
switch(KeyID)
{
   case 8:
    if (XAEXIIInput.value.length !== 5) {
        resultElement.textContent = 'Fill Captcha To Validate';
        resultElement.style.color = 'red';
        resultXAEIII = false;
        localStorage.setItem('IscaptchaValid',false);
    } else {
        resultElement.textContent = '';
        resultElement.style.color = ''; 
    }
    
   break; 
   case 46:
    if (XAEXIIInput.value.length !== 5) {
        resultElement.textContent = 'Fill Captcha To Validate';
        resultElement.style.color = 'red';
        resultXAEIII = false;
        localStorage.setItem('IscaptchaValid',false);
    } else {
        resultElement.textContent = '';
        resultElement.style.color = ''; 
    }
   break;
   default:
    resultElement.textContent = '';
    resultElement.style.color = '';
   break;
}
})


XAEXIIInput.addEventListener('keypress',(e)=>{
    let input = e.target.value;
    input = input.replace(/[^a-zA-Z0-9]/g, '');
    e.target.value = input;
 });
 XAEXIIInput.addEventListener('keyup',(e)=>{
    let input = e.target.value;
    input = input.replace(/[^a-zA-Z0-9]/g, '');
    e.target.value = input;
 });



// Generate XAEXII on page load
// document.addEventListener('DOMContentLoaded', () => {
//     generateXAEXII();
//     localStorage.setItem('IscaptchaValid',false);
// });



var input = document.getElementById("XAEXIIInput");
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
ValidateCaptchaNSendOtp($('#fType').val(),$('#fType').val())
  }
});