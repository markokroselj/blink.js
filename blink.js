 function blink(outputelemnt, textToBlink){
     let x = true;
       setInterval( ()=>{
           if(x){
            document.getElementById(outputelemnt).textContent = textToBlink;
            x = false;
           }else{
            document.getElementById(outputelemnt).textContent = "";
            x = true;
           }}, 100,
           );
       }