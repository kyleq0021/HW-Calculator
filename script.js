//Button that splits in Half

var half_button = document.getElementById("half-button");
half_button.addEventListener("click", halfNumber);

function halfNumber() {
  var inputNumber = document.getElementById("half-input").value;
  var inputNumber_half = inputNumber / 2;

  if(inputNumber){
    alert(inputNumber_half + " is half of " + inputNumber);
  }
  else{
    alert("Please enter a number...");
  }
};

//Button for fortune

var fortune_button = document.getElementById("fortune-button");
fortune_button.addEventListener("click", fortune);

function fortune() {
  var fortune_list = ["find love", "find wealth", "find happiness","dream big", "love yourself",
  "find yourself", "make new memories", "make new friends", "travel the world", "discover a new passion"];
  var fortunes = fortune_list[Math.floor(Math.random() * fortune_list.length)]

  var inputName = document.getElementById("fortune-input").value;
  var outputFortune = document.getElementById("fortune-output");
  if(inputName != ""){
    outputFortune.innerHTML = " " + inputName + ", this year you will " + fortunes + ".";
    console.log(fortunes);
  }
  else{
    alert("Please Enter Your Name");
  }
};

//style changer

var styleButton = document.getElementById("style-button");
var color = ["orange","pink","gold","purple","silver","black"];
var fontSize = ["xx-small","medium","xx-large"];
var type = ["normal","italic","oblique"];
var fontFamily = ["Roboto Condensed","Lobster Two","Sen", "Dancing Script"];
// var textShadow = [];
var letterSpacing = ["normal","15px", "30px"];
// var borderStyle = ["solid","dashed","none"];
// var borderColor = ["green","blue","yellow"];

function applyStyle(){
  document.getElementById("fortune-output").style.color = color[Math.floor(Math.random() * color.length)];
  document.getElementById("fortune-output").style.fontSize = fontSize[Math.floor(Math.random() * fontSize.length)];
  document.getElementById("fortune-output").style.fontStyle = type[Math.floor(Math.random() * type.length)];
  document.getElementById("fortune-output").style.letterSpacing = letterSpacing[Math.floor(Math.random() * letterSpacing.length)];
  document.getElementById("fortune-output").style.fontFamily = fontFamily[Math.floor(Math.random() * fontFamily.length)];
  // document.getElementById("fortune-output").style.borderStyle = type[Math.floor(Math.random() * borderStyle.length)];
}

styleButton.addEventListener("click",function(){
  applyStyle();
});
