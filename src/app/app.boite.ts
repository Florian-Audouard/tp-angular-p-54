import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Tirelire } from './app.tirelire';

@Component({
  selector: 'boite',
  template: `<div id="boite" >
                <tirelire (depenser)="depenserArgent($event)" [num]="tirelire[0]"></tirelire>
                <tirelire (depenser)="depenserArgent($event)" [num]="tirelire[1]"></tirelire>
                <tirelire (depenser)="depenserArgent($event)" [num]="tirelire[2]"></tirelire>
                <button (click)="addFr()">Ajouter 100 Fr</button>
            </div>`,
  styleUrls: ['./app.component.scss']
})

export class Boite  {
  @ViewChildren(Tirelire) children!: QueryList<Tirelire>
    tirelire = [0,0,0]


    addFr(){
        const random = Math.floor(Math.random() * 3)
        this.tirelire[random] += 100
      }
      depenserArgent(event:any){
      }

}

