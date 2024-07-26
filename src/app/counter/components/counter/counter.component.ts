import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Cuounter {{ counter }} </h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(-1)">-1</button>

  `

})

export class CounterComponent{

  constructor() {}

  public counter: number = 10;

  increaseBy( value:number ):void {
    this.counter += value;
  }

  decreaseBy( value:number ):void {
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }

}

