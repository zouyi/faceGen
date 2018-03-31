var colorpicker = document.getElementById("colorPicker");
var preview = document.getElementById("preview");

var numButton = document.getElementById("numButton");
var rangeButton = document.getElementById("rangeButton");
var randomButton = document.getElementById("randomButton");
var plusButton = document.getElementById("plusButton");

var arcButton = document.getElementById("arcButton");
var sacButton = document.getElementById("sacButton");
var autoCreate;

var hairRange = document.getElementById("myRange1");
var eyesRange = document.getElementById("myRange2");
var noseRange = document.getElementById("myRange3");
var mouthRange = document.getElementById("myRange4");

var hairImg = document.getElementById("hair");
var eyesImg = document.getElementById("eyes");
var noseImg = document.getElementById("nose");
var mouthImg = document.getElementById("mouth");

var hairInd = 1;
var eyesInd = 1;
var noseInd = 1;
var mouthInd = 1;

var faceId = 0;


colorpicker.addEventListener("change", function(){
  
        changeColor();
})

numButton.addEventListener("click", function(){
  
       changeType("number");
    
})

rangeButton.addEventListener("click", function(){
  
        changeType("range");

})

arcButton.addEventListener("click", function(){
  
        autoRandomCreate();
})

sacButton.addEventListener("click", function(){
  
        stopAutoCreate();
})


hairRange.addEventListener("change", function(){
        
    //alert(this.value);
        var hairImg = document.getElementById("hair");
        hairImg.style.width = this.value+"%";
})


eyesRange.addEventListener("change", function(){
        
    //alert(this.value);
        var eyesImg = document.getElementById("eyes");
        eyesImg.style.width = this.value+"%";
})

noseRange.addEventListener("change", function(){
        
    //alert(this.value);
        var noseImg = document.getElementById("nose");
        noseImg.style.width = this.value+"%";
})


mouthRange.addEventListener("change", function(){
        
    //alert(this.value);
        var mouthImg = document.getElementById("mouth");
        mouthImg.style.width = this.value+"%";
})

hairImg.addEventListener("click", function(){
        
    hairInd++;
    if(hairInd>3){
        
        hairInd = 1;
    }
    hairImg.src="img/hair"+hairInd+".png";
        
})

eyesImg.addEventListener("click", function(){
        
    eyesInd++;
    if(eyesInd>3){
        
        eyesInd = 1;
    }
    eyesImg.src="img/eyes"+eyesInd+".png";
        
})

noseImg.addEventListener("click", function(){
        
    noseInd++;
    if(noseInd>3){
        
        noseInd = 1;
    }
    noseImg.src="img/nose"+noseInd+".png";
        
})

mouthImg.addEventListener("click", function(){
        
    mouthInd++;
    if(mouthInd>3){
        
        mouthInd = 1;
    }
    mouthImg.src="img/mouth"+mouthInd+".png";
        
})

plusButton.addEventListener("click", function(){
     
  
    createFace();

})

randomButton.addEventListener("click", function(){
       
    randomFace();
})




function createFace(){
  
  var previewDiv = document.getElementById("preview");
  
  var myHair = previewDiv.childNodes[1].src;
  var myEyes = previewDiv.childNodes[3].src;
  var myNose = previewDiv.childNodes[5].src;
  var myMouth = previewDiv.childNodes[7].src;
  var bgColor = previewDiv.style.backgroundColor;
  
  //alert(bgColor);
  
      var dispDiv = document.getElementById("display");

  
  
  var faceDiv = document.createElement("div");
    
    faceDiv.style.width="100px";
    faceDiv.style.height="100px";
    faceDiv.style.padding="10px auto";
    faceDiv.style.margin="10px";
    faceDiv.style.position="relative";
    faceDiv.style.display="inline-block";

    
    var hairDiv = document.createElement("img");
    var eyesDiv = document.createElement("img");
    var noseDiv = document.createElement("img");
    var mouthDiv = document.createElement("img");
        

    hairDiv.style.width = "60%";
    hairDiv.style.top = "0";
    hairDiv.style.left = "19%";
    hairDiv.style.position = "absolute";
    hairDiv.src = myHair;

        
    eyesDiv.style.width = "20%";
    eyesDiv.style.top = "40%";
    eyesDiv.style.left = "40%";
    eyesDiv.style.position = "absolute";
    eyesDiv.src = myEyes;

    noseDiv.style.width = "20%";
    noseDiv.style.top = "55%";
      noseDiv.style.left = "40%";

      noseDiv.style.position = "absolute";
    noseDiv.src = myNose;


    
    mouthDiv.style.width = "20%";
    mouthDiv.style.top = "75%";
    mouthDiv.style.left = "40%";

    mouthDiv.style.position = "absolute";

    mouthDiv.src = myMouth;      


    faceDiv.appendChild(hairDiv);
    faceDiv.appendChild(eyesDiv);
    faceDiv.appendChild(noseDiv);
    faceDiv.appendChild(mouthDiv);
    faceDiv.style.backgroundColor = bgColor;
  
   faceId++;
    faceDiv.setAttribute("id","face"+faceId);
    faceDiv.setAttribute("onclick", "remove(this.id)")
      dispDiv.appendChild(faceDiv);
        
    
}

function randomFace() {
    
    
 var ranHair = Math.floor(Math.random() * 3) + 1 ;
    var ranEyes = Math.floor(Math.random() * 3) + 1 ;
    var ranNose = Math.floor(Math.random() * 3) + 1 ;
    var ranMouth = Math.floor(Math.random() * 3) + 1 ;
    
    var hairVal = Math.floor(Math.random() * 70) + 0 ;
    var eyesVal = Math.floor(Math.random() * 40) + 0 ;
    var noseVal = Math.floor(Math.random() * 30) + 0 ;
    var mouthVal = Math.floor(Math.random() * 35) + 0 ;
    
    
    hairImg.src="img/hair"+ranHair+".png";
    eyesImg.src="img/eyes"+ranEyes+".png";
    noseImg.src="img/nose"+ranNose+".png";
    mouthImg.src="img/mouth"+ranMouth+".png";
    
    hairImg.style.width = hairVal+"%";
    eyesImg.style.width = eyesVal+"%";
    noseImg.style.width = noseVal+"%";
    mouthImg.style.width = mouthVal+"%";
  
  var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    preview.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    
}

function autoRandomCreate() {
    
  autoCreate = setInterval(function(){ 
  
  
   var faceDiv = document.createElement("div");
    
    faceDiv.style.width="100px";
    faceDiv.style.height="100px";
    faceDiv.style.padding="10px auto";
    faceDiv.style.margin="10px";
    faceDiv.style.position="relative";
    faceDiv.style.display="inline-block";
  faceDiv.style.backgroundColor="lightblue";

    var dispDiv = document.getElementById("display");
    
    var hairDiv = document.createElement("img");
    var eyesDiv = document.createElement("img");
    var noseDiv = document.createElement("img");
    var mouthDiv = document.createElement("img");
    
    var hairVal = Math.floor(Math.random() * 70) + 0 ;
    var eyesVal = Math.floor(Math.random() * 40) + 0 ;
    var noseVal = Math.floor(Math.random() * 30) + 0 ;
    var mouthVal = Math.floor(Math.random() * 35) + 0 ;
    
    
    var ranHair = Math.floor(Math.random() * 3) + 1 ;
    var ranEyes = Math.floor(Math.random() * 3) + 1 ;
    var ranNose = Math.floor(Math.random() * 3) + 1 ;
    var ranMouth = Math.floor(Math.random() * 3) + 1 ;
    
    hairDiv.style.width = hairVal+"%";
    hairDiv.style.top = "0";
    hairDiv.style.left = "28%";
    hairDiv.style.textAlign="center";
    hairDiv.style.position = "absolute";
    hairDiv.src="img/hair"+ranHair+".png";

    eyesDiv.style.width =eyesVal+"%";
    eyesDiv.style.top = "40%";
    eyesDiv.style.left = "35%";
    eyesDiv.style.position = "absolute";
    eyesDiv.src="img/eyes"+ranEyes+".png";


    noseDiv.style.width =noseVal+"%";
    noseDiv.style.top = "55%";
    noseDiv.style.left = "40%";
    noseDiv.style.position = "absolute";
    noseDiv.src="img/nose"+ranNose+".png";


    mouthDiv.style.width = mouthVal+"%";
    mouthDiv.style.top = "75%";
    mouthDiv.style.left = "40%";
    mouthDiv.style.position = "absolute";
    mouthDiv.src="img/mouth"+ranMouth+".png";


    faceDiv.appendChild(hairDiv);
    faceDiv.appendChild(eyesDiv);
    faceDiv.appendChild(noseDiv);
    faceDiv.appendChild(mouthDiv);
    
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    faceDiv.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    faceId++;
    faceDiv.setAttribute("id","face"+faceId);
    faceDiv.setAttribute("onclick", "remove(this.id)")
    dispDiv.appendChild(faceDiv);
  
  
  }, 500);

}

function stopAutoCreate(){
      clearInterval(autoCreate);

}


function changeType(type){
     var range1 = document.getElementById("myRange1");
        var range2 = document.getElementById("myRange2");
        var range3 = document.getElementById("myRange3");
        var range4 = document.getElementById("myRange4");
    
        range1.type = type;
        range2.type = type;
        range3.type = type;
        range4.type = type;
}


function changeColor() {
    
    var colorVal = colorpicker.value;
    preview.style.backgroundColor=colorVal;
    
}

function remove(myid){
  
  //alert(myid);
  document.getElementById(myid).remove();
  
}
