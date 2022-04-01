import { EventComponent } from './event-compenent';

describe('EventComponent', () => {
    var component: EventComponent;

    beforeEach(()=> {
        component = new EventComponent;
    });

    it('should raise eventChanged when upEvent occured', () => {
        let totalEvents:any;
        component.EventChanged.subscribe((data) => totalEvents = data);

        component.upEvent();
        expect(totalEvents).toBe(1);
    });

    
})