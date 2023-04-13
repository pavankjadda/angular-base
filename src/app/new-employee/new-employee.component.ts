import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-new-employee',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
        <h2>Create New Employee</h2>
        <form>
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required> <br/> <br/>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required> <br/> <br/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required> <br/><br/>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required> <br/><br/>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required> <br/><br/>
            <button type="button" routerLink="/">Go back</button>
            <button type="submit">Create</button>

        </form>
    `,
    styles: []
})
export class NewEmployeeComponent
{

}
