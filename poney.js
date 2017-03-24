/**
 * Created by joachimferrari on 24/03/2017.
 */

const {Deadpool} = require('./deadpool');


class Poney {
    constructor() {
        this.energy = 0;
        this.isUnicorn = false;
        this.deadpool = new Deadpool();
        this.initInterval();
    }

    initInterval() {
        this.intervalEnergy = setInterval(() => {
            this.energy += 15;
            if (this.energy > 50) {
                this.transformToUnicorn();
            }
        }, 1000);
    }

    transformToUnicorn() {
        this.deadpool.transformPoney()
            .then(() => {
                if (this.energy < 50){
                    console.log("fail");
                    
                }

                else if (50 < this.energy < 70){
                    var max = 1;
                    var min = 0.5;
                    var a = Math.random() * (max - min);
                    if (a < 0.75){
                        console.log("Je suis une licorne");
                        this.isUnicorn = true;

                    }
                    else{
                        console.log("fail transformation");

                    }
                }

                else if (70 < this.energy < 90){
                    var max = 1;
                    var min = 0.65;
                    var a = Math.random() * (max - min);
                    if (a < 0.75){
                        console.log("je suis une licorne");
                        this.isUnicorn = true

                    }
                    else{
                        console.log("fail transformation");

                    }
                }

                else if (90 < this.energy < 100 ){
                    var max = 1;
                    var min = 0.7;
                    var a = Math.random() * (max - min);
                    if (a < 0.75){
                        console.log("je suis une licorne");
                        this.isUnicorn = true

                    }
                    else{
                        console.log("fail transformation");

                    }
                }

                else if (this.energy == 100){
                    console.log("je suis une licorne");
                    this.isUnicorn = true;

                }

            })
            
            
            .catch(() => this.isUnicorn = false)
            .finally(() => this.energy = 0);
    }

    regenere() {
        return new BluebirdPromise((resolve) => {
            setTimeout(() => {
                resolve();
                this.energy = 0;
                console.log("DeadPool est regenere");

            },1000)
        });
    }
}

export default Poney