import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nombre:string;
  constructor(public navCtrl: NavController) {
    this.nombre="";
  }

public add(val:any){
  this.nombre+=val.toString();
}
public sup(){
  this.nombre="";
}
public calculer(){
  this.nombre=eval(this.nombre);
}

}
