import {humain} from './humain.js';

class archer extends humain{
    constructor(nom, age, fleches){
        super(nom, age);
        this.fleches = fleches;
    };
};

let mimi = new archer('faranguis', 22, 'fleches');
console.log(mimi);