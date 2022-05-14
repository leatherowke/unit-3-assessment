let favColor = document.querySelector("#color");
let favPlace = document.querySelector("#place");
let favRitual = document.querySelector("#ritual");
 
function favColorHandler(){
     alert("this users favorite color is blue")
 };

 function favPlaceHandler(){
     alert("this users favorite place is anywhere in the mountains with a lake")
 };

 function favRitualHandler(){
     alert("this user has not specified any rituals")
 };

 favColor.addEventListener("click", favColorHandler);

 favPlace.addEventListener("click", favPlaceHandler);

 favRitual.addEventListener("click", favRitualHandler);