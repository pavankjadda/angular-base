import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  httpClient = inject(HttpClient);
  url =
    'https://my-json-server.typicode.com/pavankjadda/typicode-data/employees';

  getEmployees() {
    return this.httpClient.get<Employee[]>(this.url);
  }
}
