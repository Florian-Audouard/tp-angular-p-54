import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Tirelire } from './app.tirelire';

@Component({
  selector: 'boite',
  template: `<div id="boite">
                <tirelire></tirelire>
                <tirelire></tirelire>
                <tirelire></tirelire>
                <button (click)="addFr()">Ajouter 100 Fr</button>
            </div>`,
  styleUrls: ['./app.component.scss']
})

export class Boite  {
  @ViewChildren(Tirelire) children!: QueryList<Tirelire>
    addFr(){
      console.log()
        const random = Math.floor(Math.random() * this.children.length)
        this.children.toArray()[random].incre()
      
      }

}

