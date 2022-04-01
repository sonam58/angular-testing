import { EventEmitter } from '@angular/core';

export class EventComponent {
    totalEvents = 0;
    EventChanged = new EventEmitter();

    upEvent(){
        this.totalEvents++;
        this.EventChanged.emit(this.totalEvents);
    }
}