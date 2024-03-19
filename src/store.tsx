import { makeObservable, observable, action } from "mobx";


export class Store1 {
    constructor (){
        makeObservable(this)
    }

    text1 = '';
    setText1(t:string) {
        console.log(this.text1);
        this.text1 = t
    }
}
const store1 = new Store1()

