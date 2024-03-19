import { makeAutoObservable } from "mobx";


export class Store1 {
    constructor (){
        makeAutoObservable(this)
    }

    text1 : string = '';
    setText1(t:string) {
        console.log('text1='+t);
        this.text1 = t
    }
}

export const store1 = new Store1()

