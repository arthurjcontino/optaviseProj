import { Component, OnInit } from '@angular/core';

import { Department } from '../../models/department.model';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Employee } from '../../models/employee.model';
import { EmployeeCardComponent } from '../employee-card/employee-card.component'; 
import { DepartmentFilterComponent } from '../department-filter/department-filter.component';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';


@Component({
  selector: 'my-prefix-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent, DepartmentFilterComponent, SortByDatePipe],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  departments: Department[] = [];
  selectedDepartment: number | 'all' = 'all';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getEmployees(true).subscribe(data => {
      this.employees = data;
      this.applyFilter();
    });

    this.apiService.getDepartments(true).subscribe(data => {
      this.departments = data;
    });
  }
  getMaritalClass(status: string): string {
    switch (status) {
      case 'Single':
        return 'single';
      case 'Married':
        return 'married';
        default:'Unknown';
        return 'Unknown'
    }
  }
  
  onDepartmentSelected(deptId: number | 'all') {
    this.selectedDepartment = deptId;
    this.applyFilter();
  }

  applyFilter() {
    this.filteredEmployees = this.selectedDepartment === 'all'
      ? [...this.employees]
      : this.employees.filter(emp => emp.departmentId === this.selectedDepartment);
  }
  isVip(employee: Employee): boolean {
    return new Date(employee.hireDate).getFullYear() < 2020;
  }
}
