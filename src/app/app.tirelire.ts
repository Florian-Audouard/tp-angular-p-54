import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'tirelire',
  template:`
  <div class="tirelire"><button (click)="depenser()">Utiliser les {{num}} Fr</button></div>`,
  styleUrls: ['./app.component.scss']
})

//(click)="depenser()"
export class Tirelire {

    @Input() num!:number;
    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    
    depenser(){
        this.num = 0
        this.change.emit(this.num)
    }
    

}