import {humain} from './humain.js';

class guerrier extends humain{
    constructor(nom, age, force, vie){
        super(nom, age);
        this.force = force;
        this.vie = vie;
    };
};

let sasa = new guerrier('clodios', 34, 'power', 1000);
console.log(sasa);