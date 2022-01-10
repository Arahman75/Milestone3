
//1.No Kilometer to meter
function kilometerToMeter(kilometer) {
var meter = 0;
    if (kilometer <= 1000) {
        meter = kilometer * 1000;
    }
    return meter;
}
var result = kilometerToMeter(10);
console.log(result)

//2.Clock pprice
var clock =3;
var price=0;
if(clock<10){
    price=clock*99;
    console.log(price);
}
//2.Television
function budget(tv){
    var price=0;
    if(tv<=100){
        price=tv*6000;
    }
    return price;
}
var result = budget(5);
console.log(result);
//3.hotel cost
function hotelRent(day){
    var taka =0;
    if(day<=10){
        taka = day*100;
      }
    else if(day<=20){
      var firstCondition=10*100;
      var remainig = day-10;
      var secondCondition = remainig*80;
      var taka =firstCondition+secondCondition;
     }
    else{var firstCondition = 10*100;
        var secondCondition = 10*80;
        var remainig =day-20;
        var thirdCondition = remainig*50;
        var taka =firstCondition+secondCondition+thirdCondition;
      }
return taka;
}
var totalCost =hotelRent(25);
console.log('total cost:', totalCost);
//4.megafriend
function megaFriend(name){
    var larger = name[0];
    for(var i =0; i <name.length; i++){
        var elemet= name[i];
       if( elemet>larger){
           larger = elemet;
       }
    }
    return larger;
}
var name =['kamal', 'jamal', 'shahjan', 'rakib'];
var largeName = megaFriend(name);
console.log(largeName);

