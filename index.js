
const prompt = require('prompt-sync')();

class Entity{
    NAME;
    PV;
    TYPE;
    ATK_MIN;
    ATK_MAX;
    constructor(NAME, PV, TYPE, ATK_MIN, ATK_MAX ) {
        this.NAME = NAME;
        this.PV = PV;
        this.TYPE = TYPE;
        this.ATK_MIN = ATK_MIN;
        this.ATK_MAX = ATK_MAX;

    }

    heal(){
        let healValue = 1;
        this.PV = this.PV + healValue;
        console.log(this.NAME + " Use the spell of heal ! + " + healValue + " PV (" + this.PV + " PV remaining !)");
    }

    attack(){
        console.log("-------------------------------------------------------");
        console.log(this.NAME + " attack with " + this.ATK_MAX + " points !");
        console.log("-------------------------------------------------------");
        return this.ATK_MAX;
    }

    hurt(VAL){

        this.PV = this.PV - VAL;
        console.log(this.NAME + " has been attacked  with " + VAL + " points ! (" + this.PV + " PV remaining !)");
    }

    loose(){
        console.log(this.NAME + " has no PV anymore ! He is dead !");
    }

    about(){
        console.log("---------------------------------------------------------------------------");
        console.log("| Name : " + this.NAME);
        console.log("| Type : " + this.TYPE);
        console.log("---------------------------------------------------------------------------");
        console.log("| PV : " + this.PV + "| ATK MIN : " + this.ATK_MIN + "| ATK MAX : " + this.ATK_MAX);
        console.log("---------------------------------------------------------------------------");

    }

}

let player;

let enemy = new Entity("Bjork", 10, "Spectre", 1, 90);

let newEnemy = new Entity ("Ashe", 11, "Skeleton", 2, 90)

let yourTurn = true;



function fight(){ // C'est la ou se passe tout les bails
    console.log(player.NAME + " (" + player.PV + " PV) " + enemy.NAME + " (" + enemy.PV + " PV) ");

    if (yourTurn === true){ // Si c'est le tour du joueur
        console.log("                       It's your turn                               ");
        let choice = prompt("1 - Attack | 2 - Heal (Enter number you want to do) --> ");
        console.log("---------------------------------------------------------------------------");

        if (choice === "1"){ // Attaque (Choix 1)
            enemy.hurt(player.attack());
            if (enemy.PV <= 0){
                enemy.loose();
                game = 0;
            }
        }

        if (choice === "2") { // Heal (Choix 2)
            player.heal();
        }
        let x = prompt("");
         yourTurn = false;

    }

    else { // Si c'est le tour de l'ennemi
        console.log("                       It's enemy turn                               ");
        player.hurt(enemy.attack());
        if (player.PV <= 0){
            player.loose();
            game = 0;
        }
        let x = prompt("");
        yourTurn = true;
    }



}

function init(){ //Fonction permettant d'initialiser le personnage du joueur
    console.log("---------------------------------------------------------------------------");
    console.log("RPG Simulator");
    console.log("---------------------------------------------------------------------------");
    console.log("Welcome to RPG simulator ! First, choose your class : ");
    console.log("1 - Mage | 2 - Warrior | 3 - Archer");
    let choice_ok = false;
    let choice = prompt("");
    let pseudo;

    while (choice_ok === false){


        if (choice === "1"){ // Mage
            console.log("Okay so you have choose the mage, please enter your pseudo :");
            pseudo = prompt("--> ");
            player = new Entity(pseudo, 20, "Mage", 2, 4 );
            choice_ok = true;



        }

        if (choice === "2"){ // Warrior
            console.log("Okay so you have choose the warrior, please enter your pseudo :");
            pseudo = prompt("--> ");
            player = new Entity(pseudo, 40, "Warrior", 4, 3 );
            choice_ok = true;

        }

        if (choice === "3"){ // Archer
            console.log("Okay so you have choose the archer, please enter your pseudo :");
            pseudo = prompt("--> ");
            player = new Entity(pseudo, 15, "Archer", 2, 4 );
            choice_ok = true;

        }

        else {
            console.log("Please enter correct value : ");
        }
        console.log("Everything is good ! Let's fight !");
        console.log("Just here is a little recap of your stats")
        player.about();
    }


}


// C'est ici que le jeu se passe
init();
enemy.about();
let game = 1;
while (game === 1){

    fight();
}





