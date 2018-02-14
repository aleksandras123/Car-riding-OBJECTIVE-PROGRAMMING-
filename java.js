
// klases car objektas

// car funkcija (specialus objektas)

// Car.prototybe.speedup=function(s){ //Speciali prototybe funkcija
//   this.greitis+=s;
// };

// var q=prompt('Ivesk masinu kieki');
//
// var ats=prompt('Ivesk atstuma');
//
// parseFloat(ats);
//
// function Car(pav){
//   this.greitis=0;
//   console.log(this);
// }
//
// Car.prototype.speedup=function(){
//   this.greitis+=5;
// }
//
// Car.prototype.slowdown=function(){
//   this.gretis-=5;
// }
//
// for (var i = 0; i < q; i++) {
//   m=new Car(i);
//
// }

// car properties from start
function Car(name){
  this.name=name;
  this.speed=0;
  this.distance=0;
  console.log(this);
}
// car functions
// speed up
Car.prototype.speedup=function(s){
  this.speed+=s;
  if (this.speed>150) {
    this.speed=150;
  }
}

// slowdown
Car.prototype.slowdown=function(s){
  this.speed-=s;
  if (this.speed<0) {
    this.speed=0;
  }
}

// ride
// t-time
Car.prototype.move=function(t){
  this.distance+=this.speed*t; //distance
}
// prompts
let riid;
let siid;
let rd;
let allCars=[]; //set interval
let cc=prompt('Car quantity?');
cc=parseInt(cc);
if (cc>0) {
  rd=prompt('Race distance?');
  if (rd>0) {
    for (let i = 0; i < cc; i++) {
      allCars.push(new Car('Car'+i));
    }
    speedChange();
    riid=setInterval(race,500);
    siid=setInterval(speedChange,2000);
  }else {
    alert('Bad distance');
  }

}else {
  alert('Bad quantity');
}

// speed change

function speedChange(){
  for (let i = 0; i < allCars.length; i++) {
    if (Math.random()>=0.5) {
      allCars[i].speedup(
      Math.round(Math.random()*5));
    }else {
      allCars[i].slowdown(
        Math.round(Math.random()*5));
    }
  }
}
// ride
function race(){
  let winner=-1;
  for (let i = 0; i < allCars.length; i++) {
    allCars[i].move(0.5);
    if (allCars[i].distance>=rd) {
      winner=i;
      break;
    }
  }
  if (winner>=0) {
    clearInterval(riid);
    clearInterval(siid);
    console.log('winner : ' + winner);
    for (let i = 0; i < allCars.length; i++) {
      console.log('Car ' + allCars[i].name+' ' + 'Speed ' + allCars[i].speed+' ' + 'Distance ' + allCars[i].distance);
    }
  }
}
