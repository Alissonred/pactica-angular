import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  edad: number;
  nombres : Array<string>;

  constructor(){
    this.edad=23;
    this.nombres= ['pepe', 'juana', 'anastasia']
  }

  ngOnInit():void{
    console.log('es la edad')
  }

  ageDecrease(){
    this.edad--
  }
  ageIncrease(){
    this.edad++
  }

}
