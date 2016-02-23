
/////// VIKINGS ///////

//1. Creo primero la función vikingo con sus propiedades
var Viking = function(name){
  this.name = name
  this.health = Math.floor(Math.random() * (100 - 70) + 70);
  this.strength = Math.floor(Math.random() * (35 - 17) + 17);
//3. Función de ataque
  this.attack = function(){
    return this.strength;
  }
//4. Función que gestiona los golpes que recibe el vikingo
  this.receiveDamage= function(damage){
    return this.health -= damage;
  }
}

var drakkum = [
  thorum = new Viking("thorum"),
  erikum = new Viking("erikum"),
  martum = new Viking("martum"),
  carlum = new Viking("carlum"),
  anum = new Viking("anum"),
  rubun = new Viking("rubun")
]

/////// PIT ///////

//5.Let's train!!
var Pit = function(fighter1, fighter2){
  this.fighter1 = fighter1;
  this.fighter2 = fighter2;
  this.turn = 10;

//Si la salud de alguno de ellos es superior a la fuerza del otro, pelead!!
  this.pitFight = function(attack, receiveDamage){

    for(i = 0; i < this.turn; i++){
      if(this.fighter1.health > this.fighter2.strength && this.fighter2.health > this.fighter1.strength){
        this.fighter2.receiveDamage(this.fighter1.attack());
        this.fighter1.receiveDamage(this.fighter2.attack());
          console.log(this.fighter1.name + '`s life: ' + this.fighter1.health);
          console.log(this.fighter2.name + '`s life: ' + this.fighter2.health);
      }
      else{
        console.log("Why don't we stop and go to have some beers??");
        break;
      }
    }
  }
}

/////// SAXONS ///////
//7. Creo primero la función Saxon con sus propiedades 

var Saxon = function(){
  this.strength = Math.floor(Math.random() * (15 - 13) + 13);
  this.health = Math.floor(Math.random() * (60 - 20) + 20);

  this.attack = function(){
    return this.strength;
  }
}

//Aldea sajona

function create_saxons(num_saxons){
  var army = []
  for (i=0; i < num_saxons; i++){
    army.push(new Saxon());
  }
  return army;
}

var saxons_army = create_saxons (30);

var Assault = function(vikings, saxons){
  this.vikings = vikings;
  this.saxons = saxons;

  var saxon_deads = [];
  var viking_deads = [];

  this.battle = function(){
    console.log("The battle begins")

    while(saxons.length !== 0 || vikings.lentgh !== 0){
      var rVikings = vikings[Math.floor(Math.random() * vikings.length)];
      var rSaxons = saxons[Math.floor(Math.random() * saxons.length)];
    

    rSaxons.attack(rVikings);
    rVikings.attack(rSaxons);

    if(rSaxons.health <= 0){
      saxon_deads.push(rSaxons);

      var i = saxons.indexOf(rs);
        saxons.splice(i,1)
        console.log("a saxon is dead")
        console.log(saxon_deads);
        console.log(saxons);

      if (saxons.length === 0){
        return console.log("All saxons are dead");
      }

      else if(rVikings.health <= 0){
      viking_deads.push(rVikings);

      var j = vikings.indexOf(rVikings);
        vikings.splice(i,1)
        console.log("a viking is dead")
        console.log(viking_deads);
        console.log(vikings);

      if (vikings.length === 0){
        return console.log("All vikings are dead");
      }
      }
    }
  }
  }
}


var currahee = new Assault(drakkum, saxons_army)
currahee.battle();

// //2. Creo los 2 vikingos que se van a enfrentar
// var viking1 = new Viking ('Thor', 100, 10);
// var viking2 = new Viking ('Asgard', 90, 5);

// //6. Que comience el entrenamiento!!
// var trainingPit = new Pit(viking1, viking2);
// trainingPit.pitFight();

// //8. Creo sajones
// var saxons = new Saxon(Math.floor((Math.random()*10)+1), Math.floor((Math.random()*10)+1))