import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  name:string
  constructor(){
    this.name = 'Ankit'
  }
  public executeSelectedChange = (event:any) => {
    console.log(this.name);
  }
}
