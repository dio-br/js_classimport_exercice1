import {humain} from './humain.js';

class mage extends humain{
    constructor(nom, age, magie){
        super(nom, age);
        this.magie = magie;
    };
};

let soso = new mage('exodia', 25, 'feu');
console.log(soso);