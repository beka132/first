//function for dropdown 
function showfield(name){
    if(name=='Other')document.getElementById('div1').style.display="block";
    else document.getElementById('div1').style.display="none";
  }
 
 function hidefield() {
 document.getElementById('div1').style.display='none';
 }

 //function fop "h1"
 document.getElementsByTagName("h1")[0].style.fontSize = "3vw";

 //passwrord validation
 let check = function() {
  if((document.getElementById('pass1').value == '') && (document.getElementById('pass2').value == '')){
   document.getElementById('message').innerHTML = '';
  }else if (document.getElementById('pass1').value ==
   document.getElementById('pass2').value) {
   document.getElementById('message').style.color = 'green';
   document.getElementById('message').innerHTML = '';
 }else {
   document.getElementById('message').style.color = 'red';
   document.getElementById('message').innerHTML = 'Password and Confirm Password must be matched';
 }
}
