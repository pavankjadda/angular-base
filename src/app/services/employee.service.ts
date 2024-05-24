import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../types/Employee';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	httpClient = inject(HttpClient);
	url = 'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees';

	getEmployees() {
		return this.httpClient.get<Employee[]>(this.url);
	}
}
