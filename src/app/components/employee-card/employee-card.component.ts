import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'my-prefix-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})


export class EmployeeCardComponent {
  @Input() employee!: Employee; //
  isVip(): boolean {
    return new Date(this.employee.hireDate).getFullYear() < 2020;
  }
 
}
