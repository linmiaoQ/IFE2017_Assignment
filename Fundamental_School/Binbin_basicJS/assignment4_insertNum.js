
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to Gomix!</title>
    <meta name="description" content="A cool thing made with Gomix">
    <link id="favicon" rel="icon" href="https://gomix.com/favicon-app.ico" type="image/x-icon">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style.css">
  </head>
  <style>
  #presentNum span {
  background: #d3d3d3;
  color: #ffffff;
  display: inline-block;
  font-size: 21px;
  text-align: center;
  margin: 10px;
  padding: 5px 10px 5px 10px;
  border-radius: 10%;
}
  </style>
  <body>
    <input id="inputNum" type="text" placeholder="please enter a number" onkeyup="value=this.value.replace(/\D+/g,'')"/>

    <button id="leftIn">left in</button>
    <button id="rightIn">right in </button>
    <button id="leftOut">left out</button>
    <button id="rightOut">right out</button>

    <div id="presentNum">
    </div>

  <script>

    var inputNum = document.getElementById("inputNum");
    var leftIn = document.getElementById("leftIn");
    var rightIn = document.getElementById("rightIn");
    var leftOut = document.getElementById("leftOut");
    var rightOut = document.getElementById("rightOut");
    var presentNum = document.getElementById("presentNum");

    var a = [];

    a.forEach(function(element){
      presentNum.innerHTML += `<span>${element}</span> `;
    })

    leftIn.addEventListener("click", function(){
      if (inputNum.value === ""){
      inputNum.placeholder = "please enter a number"
      } else {
      a.unshift(Number(inputNum.value));
      var childNode = document.createElement("span");
      var firstChild = presentNum.firstChild;
      childNode.innerText = `${inputNum.value} `;
      presentNum.insertBefore(childNode, firstChild)
      }
    });

    rightIn.addEventListener("click", function(){
      if (inputNum.value === ""){
      inputNum.placeholder = "please enter a number"
      } else {
      a.push(Number(inputNum.value));
      var childNode = document.createElement("span");
      childNode.innerText = `${inputNum.value} `;
      presentNum.appendChild(childNode)
      }
    });

    rightOut.addEventListener("click", function(){
      presentNum.removeChild(presentNum.lastChild);
    });

     leftOut.addEventListener("click", function(){

      presentNum.removeChild(presentNum.firstChild);

    });

      presentNum.addEventListener("click", function(event){
        presentNum.removeChild(event.target);
      });



    </script>
  </body>
</html>
