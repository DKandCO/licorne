/**
 * Created by joachimferrari on 24/03/2017.
 */

const {Deadpool} = require('./deadpool');

var instances = null;

class Spiderman{
    constructor(){
        this.commencer();
        deadpool = new Deadpool();

        if (!instances) {
            instances = this;
        }
        return instances;


    }

    commencer(){
        this.intervalFatigue = setInterval(() => {
            var mini = Math.ceil(0);
            var maxi = Math.floor(deadpool.Range.length);
            var b = Math.floor(Math.random() * (maxi - mini +1)) + mini;

            deadpool.Ranch[b].joue()
                .then();


        },2000)

    }
}

//export default Spiderman;