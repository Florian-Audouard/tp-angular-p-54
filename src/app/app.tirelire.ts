import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'tirelire',
  template:`
  <div class="tirelire"><button (click)="depenser()">Utiliser les {{num}} Fr</button></div>`,
  styleUrls: ['./app.component.scss']
})


export class Tirelire {

    num = 0
    incre(){
        this.num += 100
    }
    depenser(){
        this.num =0
    }
    
    

}