import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
    selector: 'app-view-employee',
    standalone: true,
    imports: [CommonModule],
    template: `
        <p>
            employee-list works!
        </p>
    `,
    styles: []
})
export class ViewEmployeeComponent
{

}
