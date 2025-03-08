import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  transform(employees: Employee[]): Employee[] {
    return employees.sort((a, b) => new Date(b.hireDate).getTime() - new Date(a.hireDate).getTime());
  }
}
