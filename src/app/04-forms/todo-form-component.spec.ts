import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form-component';

describe('TodoFormComponent', () => {
    var component: TodoFormComponent;

    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
    });

    it('should create a form with 2 controls', () => {
        expect(component.form.contains('name')).toBeTruthy();
        expect(component.form.contains('email')).toBeTruthy();
    });

    it('should make the name control required', ()=> {
        let formControl = component.form.get('name');

        formControl!.setValue('');

        expect(formControl!.valid).toBeFalsy();
    });
});