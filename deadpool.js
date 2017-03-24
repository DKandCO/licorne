/**
 * Created by joachimferrari on 24/03/2017.
 */


const {Poney} = require('./poney.js');
const BluebirdPromise = require('bluebird');




var instance = null;
class DeadPool {
    constructor() {

        this.energy = 100;

        if (!instance) {
            instance = this;
        }



        this.Poney1 = new Poney();
        this.Poney2 = new Poney();
        this.Poney3 = new Poney();
        this.Poney4 = new Poney();
        this.Poney5 = new Poney();
        this.Poney6 = new Poney();
        this.Poney7 = new Poney();
        this.Poney8 = new Poney();
        this.Ranch =[this.Poney1,this.Poney2,this.Poney3,this.Poney4,this.Poney5,this.Poney6,this.Poney7,this.Poney8 ];

        this.init();

        return instance;

    }

    init() {
        this.intervalEnergy = setInterval(() => {
            this.energy -= 10;
            if (this.energy < 50) {
                this.SeRegenere();

            }
            console.log(this.energy);

        }, 1000);
    }

    transformPoney() {
        var licorne = [];
        for (i = 0; i < 9 ; i++){

            if (this.Ranch[i].isUnicorn == true){
                licorne.push(licorne[i]) ;
            }
        }

        return new BluebirdPromise((resolve, reject) => {
            setTimeout(() => {
                if(licorne.length<4) {
                    if (Math.random() > 0.65) {
                        resolve();
                    } else {
                        reject();
                    }
                }
                else if(licorne.length == 4){
                    if (Math.random() > 0.5) {
                        resolve();
                    } else {
                        reject();
                    }
                }
                else if(licorne.length > 4){
                    if (Math.random() > 0.35) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            },500)
        });
    }

    SeRegenere(){
        var licorne = [];

        var i =0;
        for (i ; i < 9 ; i++){
            var a = this.Ranch[i];
            if (a.isUnicorn == true){
                licorne.push(licorne[i]) ;
            }
        }
        var mini = Math.ceil(0);
        var maxi = Math.floor(licorne.length);
        var b = Math.floor(Math.random() * (maxi - mini +1)) + mini;

        licorne[b].regenere()
            .then(() => this.energy = 100 );





    }
}

dead = new DeadPool();


